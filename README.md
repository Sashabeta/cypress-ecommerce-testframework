# Cypress E2E Automation Framework - SauceDemo

![Cypress E2E](https://github.com/Sashabeta/cypress-ecommerce-testframework/actions/workflows/cypress.yml/badge.svg)
(https://github.com/Sashabeta/cypress-ecommerce-testframework/actions/workflows/cypress.yml)


## Project Overview
This repository contains an **end-to-end (E2E) UI automation framework** built with **Cypress + JavaScript**, using the **SauceDemo** application as the system under test.

The goal of this project is to demonstrate:
- Real-world Cypress test design
- Maintainable **Page Object Model (POM)** without classes
- Clean test structure suitable for production environments

This is a **portfolio project**, intentionally focused on **clarity, scalability, and best practices**, not on maximum test coverage.

---

## Tech Stack
- **Cypress**
- **JavaScript (ES6+)**
- **Page Object Model (POM)**
- **Custom Cypress Commands**
- **Fixtures for test data**

---

## Design Decisions

### Page Object Model (without classes)
- Page Objects are implemented as **plain objects with functions**
- Keeps syntax simple and avoids unnecessary abstraction
- Makes selectors and actions easy to read and maintain

---

## Selectors Strategy
- Prefer **`data-test` attributes** where available
- Selectors are scoped within Page Objects
- DOM traversal uses **`closest()`** and **`within()`** to avoid flaky tests

---

## Custom Commands
Custom commands are used only for **high-level workflows**, not UI details:
- `cy.uiLogin(username, password)`

Low-level actions (clicks, typing, assertions) remain inside Page Objects.

---

## Test Coverage

### Authentication
- Login (happy path)
- Negative login scenarios (locked user, invalid credentials)

### Cart
- Add item to cart
- Navigate from cart to checkout

### Checkout
- Checkout Step One (customer info)
- Checkout Overview
- Complete purchase (happy path)

> E2E tests intentionally focus on **user flow**, not on validating business calculations such as tax or totals.

---

## What Is Intentionally NOT Tested
To keep E2E tests stable and meaningful, the following are intentionally excluded:
- Detailed price or tax calculations
- UI styling or layout checks
- Exhaustive field-level validation
- Component-level logic (better suited for unit tests)

---

## How to Run the Tests

### Install dependencies
```bash
npm install
```

### Open Cypress Test Runner
```bash
npx cypress open
```

### Run tests headlessly 
```bash 
npx cypress run
```