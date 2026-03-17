# Student Account Management System Test Plan

This test plan covers all business logic implemented in the COBOL app. Use it to validate the system with business stakeholders and as a basis for future unit and integration tests in Node.js.

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|--------------------------------------------------|--------------|--------------------|----------|
| TC01         | View initial balance                 | App is started; balance = 1000.00 | 1. Start app<br>2. Select 'View Balance' (option 1)                        | Balance displayed as 1000.00                     |              |                    |          |
| TC02         | Credit account with valid amount     | App is started; balance = 1000.00 | 1. Start app<br>2. Select 'Credit Account' (option 2)<br>3. Enter 200.00   | Balance updated to 1200.00; confirmation shown   |              |                    |          |
| TC03         | Debit account with valid amount      | App is started; balance = 1000.00 | 1. Start app<br>2. Select 'Debit Account' (option 3)<br>3. Enter 300.00   | Balance updated to 700.00; confirmation shown    |              |                    |          |
| TC04         | Debit account with insufficient funds| App is started; balance = 1000.00 | 1. Start app<br>2. Select 'Debit Account' (option 3)<br>3. Enter 1200.00  | Error message: 'Insufficient funds for this debit.'; balance unchanged |              |                    |          |
| TC05         | Invalid menu option                  | App is started                | 1. Start app<br>2. Enter invalid option (e.g., 5)                          | Error message: 'Invalid choice, please select 1-4.'; prompt shown again |              |                    |          |
| TC06         | Exit application                     | App is started                | 1. Start app<br>2. Select 'Exit' (option 4)                                 | App exits gracefully; goodbye message shown      |              |                    |          |
| TC07         | Multiple operations sequence         | App is started; balance = 1000.00 | 1. Start app<br>2. Credit 100.00<br>3. Debit 50.00<br>4. View Balance     | Balance displayed as 1050.00                     |              |                    |          |

> Fill in Actual Result, Status, and Comments after executing each test.
