package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:Features", // it tells cucumber where Feature files are stored
		glue = {"stepDefinitions"}, // glue tells cucumber where step definitions are
		tags = {"@MultipleUserLogin"},// we can run all scenarios or only one scenario using tags
		dryRun = false,// it will check if all scenarios have step definitions
		monochrome = true, // if set to true, makes console output readable
		strict = false, //if set true, will fail the execution if there is any step pending or undefined
		format = {"pretty",
				"html:target/cucumber-reports/cucumber-pretty",
		        "json:target/cucumber-reports/CucumberTestReport.json",
		        "rerun:target/cucumber-reports/rerun.txt"},
		plugin = "json:target/cucumber-reports/CucumberTestReport.json"
		
		)

public class TestRunner {
	
	

}
