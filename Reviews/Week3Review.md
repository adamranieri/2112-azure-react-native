# Week 3 Review
- Client Side Technology
    - Your browser
- Key components of a web browser
    - HTML/CSS renderer
    - JS Engine
    - HTTP Client (way to make http Requests)
## Pillars of Clientside
- Three core technologies make up client side development
    1. HTML
        - Hyper Text Markup Language
        - Content and structure
    2. CSS
        - Cascading Style Sheets
        - Style
    3. JS
        - JavaScript
        - Make web pages dynamic
            - Manipulate the DOM
            - Make AJAX requests
### HTML
- HyperText Markup Languague
- NOT a programming language
- Core building block of HTML is the **Element** or **Tag**
- Tags can contain conent in the middle
- Tags can have attributes that add additional info or funtionality to that tag
```html
    <p id="example"> Hi I am a simple tag</p>
```
- Syntax of HTML
    - All tags should be closed at some point
    - Some tags are **self-closing**
        - img
        - hr
    - Do not have Overlapping Tags
```html
    <!-- Over lapping tags -->
    <p> My name is Adam <b>Ranieri</p></b>
```
- Minimum tags for an HTML page
```html
<!Doctype html>
<html>
    <head></head>
    <body></body>
</html>
```
Important tags
    - html
        - Root tag
    - head
        - meta information about the file
    - body
        - content of the web page
    - link
        - refences css files outside of the web page
    - script
        - including JS in your web page

### CSS
- Cascading Style Sheets
- Adds style to your web page
- **Domain Specific Language** DSL
    - A lanuguage designed to do one thing
- ***Cascade Algorithm***
    - Many styles can be applied to the same element
    - The Algorithm determines what styles override other styles
    - *the most specific style for an element wins*
- CSS Sytnax
    - **Rule**
        - Selector + Declaration
    - **Selectors**
        - To what html element(s) does this css rule apply
            - Tag
            - id
            - class
    - **Delaration**
        - The style to apply
    - **Properties**
        - The individual pairs of stylistic attributes
```CSS
    /* tag selector */
    p {color: red} 
    
    /* class selector */
    .intro {color: green}

    /* id selector */
    #bio {color: yellow}
```
![CSS Rule](https://puzzleweb.ru/en/images/css/1_1.png)

### DOM
- Document Object Model
- A tree structure of html nodes
![DOM](https://www.w3schools.com/js/pic_htmltree.gif)
- JS was orginally designed to manipulate the DOM
    - Add elements
    - Remove elements
    - Edit elements 
```html
<button onclick="someFunction()"> </button>
```
- Event Listeners
    - Setting up 'traps' on elements 
    - Will execute the function when the event is triggered

```JS
const element = document.getElementById("someElement");
element.addEventListner("click", () => {
    // something to execute when the event occurs
})
```

### AJAX
- Asynchronous JavaScript and XML
- JS to make http requests in the backgroud of a browser
- This IO operation is inherently asynchronous 
    - based on promises
- **XmlHttpRequest**
    - This is an object used by JS to perform AJAX
- **fetch**
    - Is an API supported by browsers that allows JS to make AJAX requests
    - Under the hood it uses an XmlHttpRequest object
        - Using fetch you never directly interact with it
```JS
async function getData(){

    const options = {
        method:"POST",
        body: JSON.stringify(associate),
        headers:{
            'Content-Type':"application/json"
        }
    }

    const response = await fetch("http://something.com/data", options);
    const body = await response.json()
}
```