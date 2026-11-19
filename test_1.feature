Feature: As a User, I want to login so that I can see my account page

    Scenario: Successful login

        Given I am on login page
        And my email is "username@99.co"
        And my password is "password"
        When I fill in "Email" with "username@99.co"
        And I fill in "Password" with "password"
        And I press "Login"
        Then I should go to home page

    Scenario: Wrong email address or password (credentials)

        Given I am on login page
        And my email is "username@99.co"
        And my password is "password"
        When I fill in "Email" with "username1@99.co"
        # The email doesn't match with the real email username@99.co != username1@99.co,
        # The return message should be "Wrong email", but i decided to change it to invalid credentials
        And I fill in "Password" with "password"
        And I press "Login"
        Then I should see "Invalid credentials"