package Step_Definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.*;

public class Login_Steps {

	WebDriver driver = Base_Class.driver;

	@Given("I have opened the Sauce Demo application in browser")
	public void i_have_opened_the_sauce_demo_application_in_browser() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	}

	@When("I enter the username {string}")
	public void i_enter_the_username(String UsernameVal) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement username = driver.findElement(By.id("user-name"));
		username.sendKeys(UsernameVal);
		Thread.sleep(500);
	}

	@When("I enter the password {string}")
	public void i_enter_the_password(String PasswrdVal) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PasswrdVal);		
		Thread.sleep(500);
	}

	@When("I click on the login button")
	public void i_click_on_the_login_button() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement Lognbtn = driver.findElement(By.id("login-button"));
		Lognbtn.click();
		Thread.sleep(500);
	}

	@Then("I should be Landed on the PLP Page")
	public void i_should_be_landed_on_the_plp_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Logged In Successfully");
	}

	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String string) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement Errmsg = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String Actualmsg = Errmsg.getText();
		String Expmsg = "Epic sadface: Username and password do not match any user in this service";
		Assert.assertEquals(Actualmsg, Expmsg);
		System.out.println("Login Negative Scenario Verified Successfully");
		Thread.sleep(500);
	}

}
