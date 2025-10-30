Feature: Login to Application
  As an invalid user
  I cannot log into application

  As a valid user
  I want to log in into application

  Scenario: Invalid login
    Given I open login page
    When I fill username with "INVALID USER" name
    And I feel password with "INVALID USER" password
    And I click on submit login
    Then I should see error message

  Scenario: Valid login
    Given I open login page
    When I fill username with "VALID USER" name
    And I feel password with "VALID USER" password
    And I click on submit login
    Then I should see homepage
