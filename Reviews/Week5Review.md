# React Native
- A platform for writing native software
    - mobile devices like Android or IOS
    - rarer but possible, apple watch or tv app
- The main drivers behind React Native
    - Companies wanted to leverage their web developers to build these applications
    - Developers wanted to leverage their current skill set and popular libraries
        - JavaScript
        - You could use just about any node package
- You cannot port a React app to React Native
    - "Learn Once Write Anywhere"
- React Native borrows its core design from React

## Core Components 
- React Native does not have HTML
    - View
        - A rectangle block of Screen
    - ScrollableView
        - A view which you can scroll
    - Text
    - Button
    - Switch
    - FlatList
    - DetailList
    - Image
- Much limited selection than React
- CSS does not exist 100% in React Native
    - All styles must be applied in JS
        - Hope you like flexbox
    - Not all CSS features are available
- AsyncStorage
    - ReactNative version of LocalStorage
    - Slighly different implementation
- Some web browser functions do have a React Native API corollary
    - alert()
- Other React Native APIs are helpful for specific phone related features
    - Dimesions.get()
    - Platform.OS
    - PanResponder



## Expo
- A framework for building React Native applications
```bash
expo init
expo install
```
- expo install and other CLI commands can automatically link native modules (Android or IOS specific software) to your JS code

