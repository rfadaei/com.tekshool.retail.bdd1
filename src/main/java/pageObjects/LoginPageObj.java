package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class LoginPageObj extends Base {
	
	// create a constructor for this page and this applies to all page objects
	
	public LoginPageObj () {
		// we will use initElements method of page factory class to initialize the WebElement of UI
		PageFactory.initElements(driver, this);
		
	}
	
	// pageFactory class provides @FindBy annotation to find UI elements
	// driver.findElement(By.xpath
	// above code is the same is below. but below code is used to implement PageFactory in POM design pattern
	// @FindBy(how = How.xpath, using = "//tag[@attribute = value])
	// we will store these elements as a private WebElement
	
	@FindBy (how = How.XPATH, using = "//span[contains(text(),'My Account')]")
	private WebElement myAccount;
	
	@FindBy (how = How.XPATH, using = "//a[contains(text(),'Login')]")
	private WebElement login;
	
	@FindBy (how = How.ID, using = "input-email")
	private WebElement emailField;
	
	// this is also possible
	@FindBy (id = "input-password")
	private WebElement passwordField;
	
	@FindBy (xpath = "//input[@class='btn btn-primary']")
	private WebElement loginButton;
	
	
	
	// we start writing public methods to access each element with respected actions to them
	
	public void clickOnMyAccount () {
		myAccount.click();
	}
	
	public void clickOnLogin () {
		login.click();
	}
	
	public void enterEmailAddress (String emailAddress) {
		emailField.sendKeys(emailAddress);
	}
	
	public void enterPassword (String password) {
		passwordField.sendKeys(password);
	}
	
	public void clickOnLoginButton () {
		loginButton.click();
	}
	
	public String getPageTitle () {
		String pageTitle = driver.getTitle();
		return pageTitle;
	}
	
	
	
	
	
	
	

}
