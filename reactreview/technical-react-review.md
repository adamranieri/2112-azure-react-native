# React Review

## Virtual DOM
![Virtual Dom](https://miro.medium.com/max/800/0*6lxkY72mrFcroWHi.png)
- The struture of HTML on any web page is called the **DOM**
    - How elements are nested in other elements
    - How elements are connected to each other
- Directly updating the **DOM** is an expensive operation   
    - Browsers are 'slow' in displaying changes in a dom
    - DOM is visual people WILL see it
- The virtual dom is a fancy behind the scenes fake DOM existing entirely in JS
    - HTML elements are JS objects
    - Users cannot see a virtual dom
    - Making changes and updates 100% in JS is much faster than making the changes directly to the DOM
    - React then uses the virtual to make **selective updates** of the real dom
    - React can ses exactly what components it needs to rerender and when
- Components
    - Components exist soley as JS objects controlled by the virtual dom
    - Components have a lifecycle
        1. Mounting
            - When the component is first created
            - And added to the virtual dom
        2. Updating
            - When some action requires that the component be rerendered
        3. Unmountining
            - When the component is removed from the virtual dom
- Hooks
    - Special functions that can 'hook' into this lifecycle for a component
    - These hooks add functionality to a component that would otherwise not be possible
    - Hooks CANNOT be used anywhere other than the top level of a component
- useEffect()
    - Can hook into the lifecycle at many different parts
    - when mounted
    - when updated
    - when unmounted
    - Execute a callaback during one of these events


