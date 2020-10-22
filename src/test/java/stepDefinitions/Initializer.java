package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import core.Base;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Initializer extends Base {
	
	@Before
	public void beforeHooks (Scenario scenario) {
		
		logger.info("Scenario  " + scenario.getName() + " started ");
		String browser = getBrowserName ();
		switch (browser) {
		case "Chrome":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver ();
		
		case "Firefox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		
		case "IE":
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver ();
			
		break;
		
		default:
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(getPageLoadTimeOut(), TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(getImpWait(), TimeUnit.SECONDS);
		
		
	}
	
	@After
	public void afterHooks (Scenario scenario) {
		
		tearDown(); // will close browser and all tabs after each execution
		logger.info(scenario.getName() + "  " + scenario.getStatus());
		
	}

}
