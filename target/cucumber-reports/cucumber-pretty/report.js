$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "# what should I do if I want to run the same scenario with different usernames and passwords"
    }
  ],
  "line": 25,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on login  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 31,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 32,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 33,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3"
    },
    {
      "cells": [
        "students@tekschool.us",
        "TEST"
      ],
      "line": 34,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2312260079,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Any step which is repeated at the beginning of scenarios in one feature can be placed under background keyword"
    },
    {
      "line": 6,
      "value": "# and it will reduce redundancy"
    }
  ],
  "line": 7,
  "name": "LoginTest",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 2590115597,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 63676617,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 24,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on login  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login()"
});
formatter.result({
  "duration": 3791822302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 885521988,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 526858110,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_into_MyAccount_dashboard()"
});
formatter.result({
  "duration": 518743306,
  "status": "passed"
});
formatter.after({
  "duration": 102718656,
  "status": "passed"
});
formatter.before({
  "duration": 1456813088,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Any step which is repeated at the beginning of scenarios in one feature can be placed under background keyword"
    },
    {
      "line": 6,
      "value": "# and it will reduce redundancy"
    }
  ],
  "line": 7,
  "name": "LoginTest",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 2196978663,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 45074199,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 24,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027consumer@tekschool.us\u0027 and password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on login  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login()"
});
formatter.result({
  "duration": 3786350352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 21
    },
    {
      "val": "JBond",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 657680781,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 385273609,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_into_MyAccount_dashboard()"
});
formatter.result({
  "duration": 501186595,
  "status": "passed"
});
formatter.after({
  "duration": 94522057,
  "status": "passed"
});
formatter.before({
  "duration": 1232165209,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#Any step which is repeated at the beginning of scenarios in one feature can be placed under background keyword"
    },
    {
      "line": 6,
      "value": "# and it will reduce redundancy"
    }
  ],
  "line": 7,
  "name": "LoginTest",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User is on Retail Website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_Website()"
});
formatter.result({
  "duration": 1991515842,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 77459692,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 24,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027students@tekschool.us\u0027 and password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on login  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged into MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login()"
});
formatter.result({
  "duration": 3711636213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students@tekschool.us",
      "offset": 21
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 683007481,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 623990479,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_into_MyAccount_dashboard()"
});
formatter.result({
  "duration": 534696514,
  "status": "passed"
});
formatter.after({
  "duration": 92616156,
  "status": "passed"
});
});