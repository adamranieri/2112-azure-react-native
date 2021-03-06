# React
- React is the most popular front-end framework for making web pages
- React creates a **Single Page Application**
    - A web site that is one html file and all the other "pages" are just dynamically rendered and edited HTML/CSS/JS
- React philosophy
    - HTML/CSS/JS are intricately linked to each other on modern web pages.
        - Trying seperate them into seperate files or parts of the application is splitting based on technology rather than functionality/purpose
        - HTML/CSS/JS *should* meld together
            - Angular **DOES NOT AGREE AT ALL**
        - **JSX** 
            - JavaScript eXtension
            - JavaScript-HTML hybrid language
    - **Component Based**
        - Most web pages are comprised of distinct portions of the web page.
        - You want to build these parts seperately
            - Scales really well
            - Keeps you code easier to test
            - Divide and conquer
            - Reuse code
            - Applications very modular and easier to change/refactor
    - **Lightweight and Unoppionated**
        - React does not come with many feature for building web pages
            - Routing
            - State management 
        - Does not try to enforce a specific file structure/organization to your code
    - JS
        - React is a very JavaScript focused library
        - It makes heavy use of JS features in the code
- Think in React
    - "All problems in front-end development stem from state management"
        - Guy who invented react
    - Data always flows **down**
        - State is defined in a parent component and gets passed to children component to use
        - Children CANNOT directly communicate to a parent
        - A parent can pass down a *function* that can edit the state in the parent
    - Strive to make as many **stateless** or **pure** components as possible
        - Will make your code much easier to build and test
    - Container vs display components
        - **Container Components**
            - Stateful components with many child elements within it
        - **Display Components**
            - Stateless whose sole resposiblity is to show off a good UI
    
- Redux
    - Redux is a third-party library for React
    - It is for state-managment in React
    - Redux is also a **Deisgn Pattern**
        - Data flows in one direction
        - Data flows in a loop