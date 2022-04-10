$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Featuresfiles/Login_SauceDemo.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the Sauce Demo Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the successful login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be Landed on the PLP Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Login to the application Sauce Demo",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the PLP Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.i_should_be_landed_on_the_plp_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to the application Sauce Demo",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"performance_glitch_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the PLP Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.i_should_be_landed_on_the_plp_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to the application Sauce Demo",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the PLP Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.i_should_be_landed_on_the_plp_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Negative login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Abc@gmail.com",
        "Pa$$word@123"
      ]
    },
    {
      "cells": [
        "fgr12@gmail.com",
        "Pa$$word@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Login to the application Sauce Demo",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"Abc@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"Pa$$word@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to the application Sauce Demo",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative login functionality using multiple Testdata",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"fgr12@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password \"Pa$$word@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Steps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Featuresfiles/ProductsPage.feature");
formatter.feature({
  "name": "This feature would be used to test the products price of the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Logon to the application https://www.saucedemo.com/",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Steps.i_have_opened_the_sauce_demo_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the prices of the product using data table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PLP"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have logged in successful",
  "keyword": "Given "
});
formatter.match({
  "location": "Products_Steps.i_have_logged_in_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass below products",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Products_Steps.i_pass_below_prodcuts(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should validate product prices against below prices",
  "rows": [
    {
      "cells": [
        "$29.99"
      ]
    },
    {
      "cells": [
        "$9.99"
      ]
    },
    {
      "cells": [
        "$15.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Products_Steps.i_should_validate_product_prices_against_below_prices(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});