Feature: Login
    
  Scenario: Successful login with user standard user
    Given that I am on the login page
    When I enter a valid "username" and a valid "password"
    And I click on the "Login" button
    Then I am redirected to the products page