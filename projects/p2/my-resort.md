# Project 2
## Paradise Villas
You will be building several small applications for a fictional vacation resort/hotel called Paradise Villas. You can decide what it is, Ski Resort, Beach club, Crusie Ship have fun with it. Paradise Villas is making a push to use tech to optimize work flows and vactioner experience. Another team (mostly Adam coding frantically) has completed some back-end APIs to use for many of these services. Click here for  [User Stories](https://docs.google.com/spreadsheets/d/1VWnRGHYKemis4_Gjvx8Ypcf_aIhmMKNYZVdSQU-VH-8/edit?usp=sharing). 
Click for diagram overview [Overview](https://drive.google.com/file/d/1X_9dNKCucQXgqYOaqbDPZYMegIWB4L4v/view?usp=sharing)
- You should ues Azure Functions and API managment to glue these disconnected backends into a complete microservices-application. 
    - For example, you might find that the employee API does not have an endpoint or easy way to see what employees are currently on the clock. You can and should write an Azure function to create an easy endpoint that has that information. 
    - You should use API managment to have a consistent url to code your mobile and Front-end application 
- The main goals for p2
    1. Learn how to develop features as a team using git and DevOps
    2. Learn React Native
    3. Learn Microservices architecture and cloud deployement

## Main Applications

### Vacationer Mobile App
This is a mobile app that the resort is pushing on it's guests to download. This app is designed to help assist them during their stay. 
- **Technical Specs**
    - React Native Mobile App
    - Uses the event API
    - Uses the room service API
    - Uses the reservation API
    - Uses the problem API

### Employee Mobile App
This is a mobile app that the resort is using for its employees. The resort provides all employees a work phone. 
- **Technical Specs**
    - React Native Mobile App
    - Uses the employee API
    - Uses the event API
    - Uses the room service API
    - Uses the reservation API
    - Uses the problem API


### Admin Tech Web Page
This is a web site that is use by tech admins to manage employees
- **Technical Specs**
    - React web page
    - Deoployed using static web app
    - Uses the employee API
    - Uses Azure Active Directory for login by admins
- Deployement Details
    - Use Azure static web apps to host

### DevOps Requirements
- Build your applications using CI in GitHub
    - Branch by feature and make pull requests
- You should write as Jest tests for ALL stateless components.
- Try to cover all components with testing if possible
    - We will go over react native testing towards the end of the week
        - It has a slightly more difficult set up


- Bonus features. 
- If you finish MVP features early you can add bonus features. You can also pitch me ideas. Examples
    - QR code scanner to sign up for reservation at restaurant 
    - Event Roulette (create an itinerary for vactioners to try)
    - Take-a-break Notifies employees to take a break if they have not gone on break in 2 hours
    - etc...

