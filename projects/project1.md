# Project 1
# Due 1/31 (Extended for holidays)

## Expense Reimbursement System
You are tasked with creating an expense reimbursement system. For a small company/group. This program will allow employees to create reimbursement requests.All Managers can view these requests and approve or deny them. When they approve/deny they can optionally leave a message.

### key features
- Employee
    - An employee can login to see their own reimbursements, past and pending
    - An employee can submit a reimbursement with an amount and a reason
        - Bonus allow for file upload
- Manager
    - A Manager can view all reimbursements past and pending
    - A Manager can appove or deny any reimbursement
    - Managers can view a 'statistics' page. That includes information like what employee spends the most money, mean expenditure cost etc...

### Key Notes
- you do not have to allow for the creation of employees or managers.
    - You can have these already in the database.
- You do not need to have implement security for application. You can assume that a later security team is responsible for making the applicaiton secure.
    - API routes do not need to be protected
    - Passwords do not have to be encrpted

### Technical and testing requirements
- Backend developed with express
- Backend should be a RESTful web service
    - You may have to a make a non-REST compliant endpoint for login. This is normal.
    - Example PATCH /login  body {username:"bill", password:"gators4ever"}
- Data persisted in Cosmos DB 
- All DAO methods should have a test
- All Service methods with logic should have a test
    - use mocking when applicable
- There should be logging in the application
- The front-end website must be written in React
- You will also make a ***Mobile App*** in React Native
    - DO LAST
    - Only managers can log in
    - The app is for managers only and allows for approving/rejecting pending reimbursements with a comment
        - There is no statistics viewer

## CI and Deployment Requirements
- Front end statically hosted on Azure
- All code in GitHub tested with github actions
- Code analyzed with Sonar Cloud
- Backend publicly available via ngrok
    - Can be hosted on Azure VM
    - Can use App service as well
- You will be doing daily standups with your Agile team

