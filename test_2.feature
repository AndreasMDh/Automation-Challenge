Feature: As a User, I want to login so that I can see my account page

    # Given a registered account with:
    # Email : username@99.co
    # Password : Pa$$word
    # Phone number : +6581359715

    # Successful login

    Scenario: Successful login with email
        Given I am on login page
        And my email is "username@99.co"
        And my password is "Pa$$word"
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should go to home page

    Scenario: Successful login with phone number
        Given I am on login page
        And my phone number is "+6581359715"
        And my password is "Pa$$word"
        When I fill in "Identifier field" with "+6581359715"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should go to home page

    # Field validation

    Scenario: Empty email
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with " "
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Identifier is required"

    Scenario: Empty password
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with " "
        And I press "Login"
        Then I should see "Password is required"

    # Invalid identifier

    Scenario: Invalid email domain
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Invalid email format"

    Scenario: Invalid email format
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username99.co"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Invalid email format"

    Scenario: Wrong country code
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "+629315841357"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Invalid country code"

    # Invalid password

    Scenario: Invalid password length (password >= 8)
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "Pa$word"
        And I press "Login"
        Then I should see "Invalid credentials"

    Scenario: Invalid password format 1 (no uppercase)
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "pa$$word"
        And I press "Login"
        Then I should see "Invalid credentials"

    Scenario: Invalid password format 2 (no lowercase)
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "PA$$WORD"
        And I press "Login"
        Then I should see "Invalid credentials"

    Scenario: Invalid password format 3 (no symbols)
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "Password"
        And I press "Login"
        Then I should see "Invalid credentials"

    # Authenthication

    Scenario: Wrong email address
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username1@99.co"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Invalid credentials"

    Scenario: Wrong password
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "username@99.co"
        And I fill in "Password" with "Pa$$$word"
        And I press "Login"
        Then I should see "Invalid credentials"

    Scenario: Wrong phone number
        Given I have a registered account
        Given I am on login page
        When I fill in "Identifier field" with "+6513818389"
        And I fill in "Password" with "Pa$$word"
        And I press "Login"
        Then I should see "Invalid credentials"

