package stepDefinitions;
import org.junit.Assert;
import org.openqa.selenium.ElementNotInteractableException;
import core.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObj;
import pageObjects.MyAccountPageObj;
import utilities.WebDriverUtility;

public class LoginTestStepDefinition extends Base {
	
	// we need to create obj of loginPageObj
	LoginPageObj loginPageObj = new LoginPageObj();
	MyAccountPageObj myAccountPageObj = new MyAccountPageObj();
	
	@Given("^User is on Retail Website$")
	public void user_is_on_Retail_Website() throws Throwable {
		// we need to get to retail website.
		Base.initializeDriver();
		logger.info("Retail page is opened");
		String actualPageTitle = loginPageObj.getPageTitle();
		String expectedPageTitle = "TEK SCHOOL";
		Assert.assertEquals(expectedPageTitle, actualPageTitle);
		logger.info("Page title  is verified");
		WebDriverUtility.screenShot();
	}
	
	@When("^User click on MyAccount$")
	public void user_click_on_MyAccount() throws Throwable {
		loginPageObj.clickOnMyAccount();
		logger.info("User click on My Account");
	}
	
	@When("^User click on login$")
	public void user_click_on_login() throws Throwable {
		loginPageObj.clickOnLogin();
		logger.info("User click on Login");
		WebDriverUtility.wait(3000);
		WebDriverUtility.screenShot();
	}
	
	
	// in Cucumber in order to pass values from scenario steps as a parameter we
	// need to replace values with (.+)
	// and also we need to pass parameters as string to associated java methods.
	@When("^User enter username '(.+)' and password '(.+)'$")
	public void user_enter_username_sdet_tekschool_us_and_password_sdet(String userName, String password)
			throws Throwable {
		loginPageObj.enterEmailAddress(userName);
		logger.info("User enter email address");
		loginPageObj.enterPassword(password);
		logger.info("User enter password");
		WebDriverUtility.screenShot();
	}
	
	
	@When("^User click on login  button$")
	public void user_click_on_login_button() throws Throwable {
		loginPageObj.clickOnLoginButton();
		logger.info("User click on Login button");
	}
	
	
	@Then("^User should be logged into MyAccount dashboard$")
	public void user_should_be_logged_into_MyAccount_dashboard() throws Throwable {
		Assert.assertTrue(myAccountPageObj.isMyAccountDisplayed());
		Assert.assertTrue(myAccountPageObj.isMyOrdersDisplayed());
		WebDriverUtility.screenShot();
	}
	
	@And("^User click on logout$")
	public void user_click_on_logout() throws Throwable {
		// in order to handle the exception we can use try catch blocks.
		try {
				myAccountPageObj.clickOnLogOut();
		} catch (ElementNotInteractableException e) {
				myAccountPageObj.clickOnLogOut();
		}
	}
	
	@Then("^User should be logged out from MyAccount dashboard$")
	public void user_should_be_logged_out_from_MyAccount_dashboard() throws Throwable {
		Assert.assertTrue(myAccountPageObj.isLogOutConfirmationTextDisplayed());
		WebDriverUtility.screenShot();
		WebDriverUtility.wait(5000);  
	}
}
