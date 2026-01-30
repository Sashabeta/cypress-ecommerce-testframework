PROJECT OVERVIEW

This repository contains an end-to-end (E2E) UI automation framework built with Cypress + JavaScript, using the SauceDemo application as the system under test.

The goal of this project is to demonstrate:

real-world Cypress test design

maintainable Page Object Model (POM) without classes

clean test structure suitable for production environments

This is a portfolio project, intentionally focused on clarity, scalability, and best practices, not on maximum test coverage.

TECH STACK

Cypress

JavaScript (ES6+)

Page Object Model (POM)

Custom Cypress Commands

Fixtures for test data

DESIGN DECISIONS

Page Object Model (without classes)

Page Objects are implemented as plain objects with functions

Keeps syntax simple and avoids unnecessary abstraction

Makes selectors and actions easy to read and maintain

SELECTORS STRATEGY

Prefer data-test attributes where available

Selectors are scoped within Page Objects

DOM traversal uses closest() and within() to avoid flaky tests

CUSTOM COMMANDS

Custom commands are used only for high-level workflows, not UI details:

cy.uiLogin(username, password)

Low-level actions (clicks, typing, assertions) remain inside Page Objects.

TEST COVERAGE

Authentication:

Login (happy path)

Negative login scenarios (locked user, invalid credentials)

Cart

Add item to cart

Navigate from cart to checkout

Checkout

Checkout Step One (customer info)

Checkout Overview

Complete purchase (happy path)

E2E tests intentionally focus on user flow, not on validating business calculations such as tax or totals.


What Is Intentionally NOT Tested


To keep E2E tests stable and meaningful, the following are intentionally excluded:

Detailed price/tax calculations

UI styling or layout checks

Exhaustive field-level validation

Component-level logic (better suited for unit tests)

How to Run the Tests

Install dependencies
npm install

Open Cypress Test Runner
npx cypress open

Run tests headlessly
npx cypress run