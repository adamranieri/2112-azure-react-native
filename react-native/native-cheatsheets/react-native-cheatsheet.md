# Essential Terminology
- Native
    - inherent to the device the code is running on.
        - example: Java code in Android OS for operating the camera
- Native Module
    - Code written in Java/C/Swift/etc that directly interacts with the native phone APIS.
- JSI
    - JavaScript Interface
    - Allows JavaScript methods to directly use methods/objects in a Native Module

# Essential Components
- Core Components provided by react Native
- Will be turned into Native versions on phone or other device

|Component|HTML Equivalent|Usage|
|---------|---------------|-----|
|View| div| a rectangular pactch of screen|
|Text| p, h1-h6, b | Any text that needs to be displayed|
|Image| img| display an image|
|ScrollView| div | A scrollable view|
|TextInput| input type="text"| allows for text input|
|FlatList| ul | Simple List of rendered views|
|SectionList| dl | List of rendered views with a title for each item|
|Button| button| button for handling presses|
|Pressable| N/A| Wrapper for other components to add press functionality (Replaces Touchable Opacity)|
|Switch| input type="checkbox"| Boolean value input|
|StatusBar| N/A | Shows Celluar, battery etc...|

# React Native APIs
- React Native provides APIs for common operations on a phone
- These APIs are accessible by your React Native Code
    - Avaialable as imports from react-native

|API|Usage|
|---|-----|
|Animated| Performs smooth animations|
|Platform| Used to get the OS the code is running on like Android, web or IOS|
|Vibration| Virbate the phone|
|useWindowDimension| API in the form of a hook that allows getting screen size|
|StyleSheet| Used to write styles in a CSS-esque syntax|
- Many more not listed

# Styling
- True CSS does not exist in React Native
    - CSS is for a web browser not phone
- Using the StyleSheet API you can create CSS-esque styling using object-literals in code
- The core method of styling is flexbox

| Property      | Values          | Description                                         |
| ------------- | --------------- | --------------------------------------------------- |
| flexDirection | 'column', 'row' | Used to specify if elements will be aligned vertically or horizontally |
| justifyContent| 'center','flex-start','flex-end','space-around','space-between'| Used to determine how should elements be distributed inside the container |
| alignItems    | 'center','flex-start','flex-end','stretched' | Used to determine how should elements be distributed inside the container along the secondary axis (opposite of flexDirection) |


