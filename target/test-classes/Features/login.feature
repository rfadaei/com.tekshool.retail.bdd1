@LoginRegression

Feature: Login to Retail Website

#Any step which is repeated at the beginning of scenarios in one feature can be placed under background keyword 
# and it will reduce redundancy
Background: LoginTest
Given User is on Retail Website
And User click on MyAccount


@login
Scenario: log into myAccount
When User click on login
And User enter username 'sdet@tekschool.us' and password 'sdet'
And User click on login  utton
Then User should be logged into MyAccount dashboard



# what should I do if I want to run the same scenario with different usernames and passwords

@MultipleUserLogin
Scenario Outline: Login to Retail Site with multiple users
When User click on login
And User enter username '<userName>' and password '<password>'
And User click on login  utton
Then User should be logged into MyAccount dashboard
Examples:
|userName|password|
|sdet@tekschool.us|sdet|
|consumer@tekschool.us|JBond|
|students@tekschool.us|TEST|



@logout
Scenario: log out from myAccount
When User click on login
And User enter username 'sdet@tekschool.us' and password 'sdet'
And User click on login  utton
And User should be logged into MyAccount dashboar
And User click on MyAccount
And User click on logout
Then User should be logged out from MyAccount dashboard








