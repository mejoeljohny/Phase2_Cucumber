Feature: This feature would be used to test the products price of the application https://www.saucedemo.com/


  Background: Logon to the application https://www.saucedemo.com/
    Given I have opened the Sauce Demo application in browser


@PLP @Regression
  Scenario: Validate the prices of the product using data table
    Given I have logged in successful
    When I pass below products
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Test.allTheThings() T-Shirt (Red) |
    Then I should validate product prices against below prices
      | $29.99 |
      | $9.99  |
      | $15.99 |