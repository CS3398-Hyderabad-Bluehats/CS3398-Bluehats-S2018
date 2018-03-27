/* Allows user to input password and login through the website. 
 * Will be connected to the MongoDB and Userpasswords to come
 */

import java.util.Scanner;

public class UserLogin {
public void run() {
	//To replaced with Database and to add info from Frontend
	Scanner scan = new Scanner (new File("the\\dir\\myFile.extension"));
    Scanner keyboard = new Scanner (System.in);
    String user = scan.nextLine();
    String pass = scan.nextLine(); 

    String usernameInput = keyboard.nextLine();
    String passwordInput = keyboard.nextLine(); // gets input from user

    if (usernameInput.equals(user) && passwordInput.equals(pass)) {
        System.out.print("your login message");
    } else {
        System.out.print("your error message");
    }
}
} 