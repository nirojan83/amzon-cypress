# Cypress Automation Framework for Amazon Create Account Flow

This repository contains an automated end-to-end test suite for Amazons Create Account Feature using [Cypress](https://www.cypress.io/). The project follows the **Page Object Model (POM)** structure and supports **data-driven testing**, **multi-browser support**, and generates **HTML reports** with MochaAwesome.

---

## Prequisites

    •	Node.js & npm: Install via https://nodejs.org
    •	Git: Install via https://git-scm.com
    •	VS Code or another code editor (optional but helpful)

## Setup Instructions

### Clone the Repository

- git clone https://github.com/nirojan83/amzon-cypress.git
- cd amazon-cypress

### Install dependencies

- npm install

This will install Cypress, mochawesome, and all required dev tools

## Tools & Technologies Used

| Tools        | Purpose               | 
| --------     | --------------------- |
| Cypress      | End-to-End Testing    |
| JavaScript   | Scripting Language    |
| Mochawesome  | HTML  reporting       |
| Node.js (npm)| Dependency management |

## How to Run Tests

### Option 1: Cypress Runner (GUI) more for debugging

npx cypress open

•	Launches the Cypress Test Runner UI

•	Select and run individual test specs manually

### Option 2: Headless CLI execution with reports

npm run test:report

•	Runs all tests in headed mode

•	Renames the HTML report with a timestamp

•	Saves the report in cypress/reports/

### Option 3: Headed CLI execution with reports using desired browser

**npm run test:headed:reportChrome** (Chrome) or 

**npm run test:headed:reportFF** 

Could have added other browsers but for this demo I kept it simple

•	Runs all tests in headless mode

•	Renames the HTML report with a timestamp

•	Saves the report in cypress/reports/

### Test Reports

•	HTML reports are generated using Mochawesome

•	After running npm run test:report, the latest report can be found at:
cypress/reports/TestReport_<timestamp>.html

## Assumptions Made

•	Amazon’s UI elements and DOM structure remain stable across test runs

•	Not having to deal with CAPTCHAs during test runs

•	Tests are limited to non-authenticated, publicly accessible Amazon pages

•	Cypress runs are assumed to be local or in a CI/CD runner (no Docker or cloud grid needed unless configured)
