$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Databse SQL Query Feature",
  "description": "",
  "id": "databse-sql-query-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4304167437,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Execute all information from actor table",
  "description": "",
  "id": "databse-sql-query-feature;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sqlquery"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User connects to PostgreSQL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sends \"select*from public.actor\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "SqlQueryStepDefinitions.user_connects_to_PostgreSQL()"
});
formatter.result({
  "duration": 283397890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select*from public.actor",
      "offset": 12
    }
  ],
  "location": "SqlQueryStepDefinitions.user_sends(String)"
});
formatter.result({
  "duration": 22226517,
  "status": "passed"
});
formatter.match({
  "location": "SqlQueryStepDefinitions.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "duration": 41737984,
  "status": "passed"
});
formatter.after({
  "duration": 168058387,
  "status": "passed"
});
});