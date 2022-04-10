Feature: This feature would be used to design the Login page of the Sauce Demo Application

Background: Login to the application Sauce Demo
    Given I have opened the Sauce Demo application in browser

@Login @Sanity
  Scenario Outline: Validate the successful login functionality using multiple Testdata
    Given I have opened the Sauce Demo application in browser
    When I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the login button
    Then I should be Landed on the PLP Page

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | problem_user            | secret_sauce |

@Login
  Scenario Outline: Validate the Negative login functionality using multiple Testdata
    Given I have opened the Sauce Demo application in browser
    When I enter the username "<username>"
    And I enter the password "<password>"
    And I click on the login button
    Then I should get the error message as "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | username        | password     |
      | Abc@gmail.com   | Pa$$word@123 |
      | fgr12@gmail.com | Pa$$word@123 |
