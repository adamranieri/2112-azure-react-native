# Essential Questions
Every batch I make an essential questions review. These are questions that you *MUST* be able to answer. These are questions I have seen get asked before on other interviews or I think will be pertinent to your interviews. A lot of time interviewers are trying to gauge your level of technial competency rather than skill in a specifc area. If you do not know an answer completely reason out how you might arrive at an answer. Questions can be open ended. You can ask interviewers clarifying questions and follow up questions. You 100% should ask questions if they say "any questions?".
- **Interviewers want to hear you talk in a way that shows you understand the question, even if you do not know the answer**. 
- Interviewers are hiring a person. That means you want to be friendly and engaged. 
    - Show your personality :)
- Avoid short answers. Elaborate when you can.
- Do you like JS?
    - bad Answer: Yes
    - Good Answer: Yes, it is a very flexible language that can make you feel clever. However, it's lack of standardization and dynamic typing can make debugging difficult.
    - you can agree or disagree but support your answer


# JavaScript/TypeScript/node/ Web Dev
- Tell me about how you have used JS?
- What are some features of JS?
- What are some ES6 features you have used?
- What experience do you have in TS?
- How have you used TS in your projects?
- How did you set up TS?
- If given the choice would you program in TS or JS?
- Tell me about what you have done in node?
- What projects did you work on in node.js?
- How do I set up a node project?
- How do I configure testing and dependencies?
- What is a callback?
- What is REST?
- Tell me about the web servers technoologies you used?
- How did you test your RESTful services
- How have you used git?
- Have you used CI or CD and how?

# Cloud
- What experience do you have with cloud?
- How do you deploy your frontend?
- How would you deploy something on the backend?
- Tell me about cloud functions?
- What is your experience in Azure?
- Do you like cloud computing?


# React/React Native
[React Native Interview Questions](https://www.interviewbit.com/react-native-interview-questions/)
You are interviewing for a React/React Native position.
- What is JSX?
- What is React?
- What is React Native?
- How are RN and React different?
- What are some core components in React Native?
- What are their equivalents in the browser?
- Tell me about hooks?
- Tell me how to use hook "x" ? 
    - **useState()**
    - **useEffect()**
    - **useContext()**
- What is JSI?
- Tell me about the component lifecycle?
- How do you set up React Native?
- How do you set up React?
- How do you style and layout elements in React native?
- Why code in React Native?
- What is prop drilling?
- What is redux and when do I use it?
- How do I handle state in React?
- What is the virtual dom?
- What about code that needs to run for a specific platform?
- When might React Native be a bad decision?
- How do I do routing with React-DOM
- How do I do routing in React Native?
- What are children in React?
- How would you build for Android or IOS.
    - Expo was used to target both.
- Did you use any React Native platforms like Expo?



# Non-Technical Skills
You will always be asked soft skills questions. Employers want to hire people they think will get along and work in team environments.
- ***Agile/Scurm***
    - How did you stay agile?
    - How did you communicate with each other?
    - What Scrum ceremonies did you perform?
- ***Project Management***
    - Documentation?
    - Tracking Application?
    - Describing the project as a whole and what you did on it?
    - How did you ensure code quality?
    - How did you guys work on feature for your application?
    - How did you decide who worked on what?

# Essential Soft Skill Questions
- Tell me about yourself?
- What are you interested in?
- What do you like about development?
- What do you like about testing?
- What was your favorite thing to learn?
- What have you been learning?
- Where do you see yourself in a few years?
- How do you get into a good work mindset?
- How did you communicate in your project?
- What was your last project?
- Walk me through the technology stack of your last project?
- What did you do on your last project?
- What was something you learned on your last project?
- How did you stay agile?
- What agile ceremonies did you do?

# SQL Practice
There is a chance you will be asked to write a SQL query.(This type of question gets asked a lot) The chinook database is a practice database. Run the script here in your DB to get it.
https://raw.githubusercontent.com/lerocha/chinook-database/master/ChinookDatabase/DataSources/Chinook_PostgreSql.sql
- Querying practice
    - Select all records from the Employee table.
    - Select all records from the Employee table where last name is King.
    - Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
    -  Select all albums in Album table and sort result set in descending order by title.
    - Select first name from Customer and sort result set in ascending order by city
    - Select all invoices with a billing address like “T%”
    - Select all invoices that have a total between 15 and 50
    - Select all employees hired between 1st of June 2003 and 1st of March 2004
- Insert practice
    - Insert two new records into Genre table
    - Insert two new records into Employee table
    - Insert two new records into Customer table
- Update Practice
    - Update Aaron Mitchell in Customer table to Robert Walter
    - Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
- Joins
    - Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId
    - Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
    - Create a right join that joins album and artist specifying artist name and title.
    - Create a cross join that joins album and artist and sorts by artist name in ascending order.
    - Perform a self-join on the employee table, joining on the reportsto column.
- Set Operators
    - Use a unionall to create a table that has the name of all employees and customers
