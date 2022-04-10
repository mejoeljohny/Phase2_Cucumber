package Step_Definitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"html:target/html-cucumber","json:target/cucumber.json"},
		features = "src/test/java/Featuresfiles",
		 tags= {"@Login,@Sanity, @PLP, @Regression"}, 	
		glue = { "Step_Definitions" }
)
public class TestRunnerClass {

}

