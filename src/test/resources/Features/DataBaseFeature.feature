Feature: Databse SQL Query Feature

	@sqlquery
  Scenario: Execute all information from actor table
    Given User connects to PostgreSQL
    When User sends "select*from public.actor"
    Then User should get all information from that table
