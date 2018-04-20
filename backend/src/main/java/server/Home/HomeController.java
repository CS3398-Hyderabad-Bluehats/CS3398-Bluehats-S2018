package server.Home;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {

    @Autowired
    ObjectMapper mapper;

    @RequestMapping(value="/home", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getHome() throws Exception {
        ImageLoader imageList = new ImageLoader();
        imageList.addImage("image.test");
        ArrayList<ObjectNode> entities = new ArrayList<ObjectNode>();
        int counter = 0;
        for (String filename : imageList.getImages()) {
            ObjectNode objectNode = mapper.createObjectNode();
            objectNode.put(String.format("img%d", counter), filename);
            entities.add(objectNode);
            counter++;
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }


}