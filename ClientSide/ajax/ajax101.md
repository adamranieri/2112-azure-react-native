# AJAX Asynchronous JavaScript and XML
- Terrible name in that almost nobody requests XML anymore. 99% of the time it is JSON
- Before AJAX if you web page made a http request to handle the response the web page had to reload
    - slow
    - not a great user experience
- AJAX allows JS to make HTTP requests 'in the background' and then dynamically handle the response when it is recieved
- This is possible because JS by default is asynchronous

## CORS
- If web development was a game CORS is the final boss
- Primarliy a secutity feature
- Cross Origin Resource sharing
    - Computers and browsers are constanlty communicating with each other
- Servers may not WANT anyone to just make HTTP requests to their server
    - They might want to block it
- CORS is designed to block requests made via JavaScript
- CORS is a security feature to prevent malicious JS from exectuing http requests on your web page
    - XSS (Cross Site Scripting)
- if getting CORS
    1. If it is your own server you can enable CORS for all origins
    2. Pick a different API