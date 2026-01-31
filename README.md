ITPM Assignment 1 – Test Automation

This repository contains my ITPM Assignment 1, which focuses on building a comprehensive automated testing suite for the Swift Translator web application
🔗 https://www.swifttranslator.com/

The main purpose of this project is to evaluate the accuracy of Singlish to Sinhala transliteration and to ensure the stability and responsiveness of the real-time user interface using automated tests.

Project Overview

Objective:
To verify the correctness of Singlish phonetic inputs being converted into Sinhala Unicode characters and to validate overall system behavior under different scenarios.

What is Tested:

Transliteration accuracy

Positive and negative functional behavior

UI stability and response handling

Testing Framework:
All test cases are implemented using the Playwright automation framework.

Test Coverage

This automation suite includes:

24 Positive Functional Test Cases

10 Negative Functional Test Cases

UI Validation Tests

These tests collectively ensure both functional correctness and robustness of the application.

Dependencies

The project uses the following main dependencies:

@playwright/test – Core Playwright testing framework

playwright – Browser engines (Chromium, Firefox, WebKit)

typescript – For structured and maintainable test code

Installation & Setup

Follow these steps to set up and run the project locally:

Clone the repository

git clone https://github.com/Ovinda-Rathnayeka/IT23172050

Navigate to the project directory

cd ITPM_Assignment_1

Install dependencies

npm install

Install Playwright browsers

npx playwright install

Running the Tests

To execute all test cases:

npx playwright test

To view the test report:

npx playwright show-report
