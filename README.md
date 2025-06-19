# Amber SDET Automation Project

A beginner-friendly automation project inspired by the SDET-1 role at AmberStudent. It covers UI testing, API testing, performance testing, and CI/CD.


This project helped me understand the basics of UI and API automation, performance testing, and CI/CD. I built everything step by step and learned how real-world tools work together in a testing workflow.

I'm actively improving this project and learning as I go.

Future Improvements
Add negative test cases and PUT/DELETE methods for APIs

Explore basic mobile test automation using Appium

Add test report generation and parallel execution

##  Project Highlights

- UI automation using Playwright (JavaScript)
- REST API testing with GET and POST requests
- Load testing using Locust (Python)
- CI/CD integration with GitHub Actions

##  Folder Structure

```
amber-sdet-project/
├── tests/
│   ├── ui/                 → Playwright UI tests
│   ├── api/                → Playwright API tests (GET, POST)
├── locustfile.py           → Performance test script
├── .github/workflows/      → CI/CD workflow (playwright.yml)
├── README.md               → Project documentation
```

## ▶️ How to Run

```bash
# Run all tests
npx playwright test

# Run only UI tests
npx playwright test tests/ui/

# Run only API tests
npx playwright test tests/api/
```

## 🧪 Load Test (Locust)

```bash
locust --host=https://reqres.in
```


