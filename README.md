# amber-sdet-project
First SDET project. Tried to cover UI testing with Playwright, API testing, performance testing with Locust and a bit of CI/CD using GitHub Actions.

Web automation using Playwright (JavaScript)
REST API testing using Playwright’s built-in request feature.
Performance testing with Locust.
CI/CD setup using GitHub Actions.

The idea behind this project was to learn testing tools in a hands-on way and simulate real-world scenarios like searching for a city on AmberStudent or validating API responses.


tests/ui-search.spec.js:

What this test does:
Opens AmberStudent homepage
Enters "London" into the search bar
Waits briefly for the dropdown
Selects a city using keyboard navigation
Verifies that the resulting URL contains “london”

Command to run this: npx playwright test tests/ui-search.spec.js
----------------------------------------------------------------------------------------

locustfile.py: To test how the API performs under load, I used Locust. 

What this script does:
Simulates virtual users that repeatedly hit the API endpoint: /api/users?page=2
Adds a wait time of 1–3 seconds between each request per user
Lets you monitor performance stats like average response time, failures, requests per second and more.

How to run:
locust --host=https://reqres.in

Then open your browser at http://localhost:8089 to start the test.
--------------------------------------------------------------------------------------------

tests/api-check.spec.js

Purpose:
This script verifies the response of a simple GET request to a public API. It checks whether the API is up and responding correctly with expected data.

What it does:

Sends a GET request to https://jsonplaceholder.typicode.com/posts/1
Confirms the API responds with a 200 (OK) status
Checks if the returned JSON contains expected fields like:

id with value 1
userId
title (and makes sure the title is a string)

Tools used:
Playwright Test Runner
REST API testing
JavaScript

Command to run: npx playwright test tests/api-check.spec.js
