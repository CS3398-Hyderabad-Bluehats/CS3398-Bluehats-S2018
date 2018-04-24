package server.Login;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;



@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class LoginControllerTest {

    @Autowired
    private LoginController controller;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

    @Test
    public void testPOSTlogin() throws Exception {
        LoginCredentials testCredentials = new LoginCredentials();
        testCredentials.setName("Mike");
        testCredentials.setPassword("password");
        this.mockMvc.perform(post("/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(testCredentials))
        )
        .andExpect(status().isOk());
    }

    @Test
    public void testPOSTloginRejected() throws Exception {
        LoginCredentials testCredentials = new LoginCredentials();
        testCredentials.setName("Mike");
        testCredentials.setPassword("notpassword");
        MvcResult result = this.mockMvc.perform(post("/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(testCredentials))
        )
        .andDo(print())
        .andExpect(status().isOk())
        .andReturn();

        String content = result.getResponse().getContentAsString();
        System.out.println(content);
        assertThat(content).isEqualTo("false");
    }

}
