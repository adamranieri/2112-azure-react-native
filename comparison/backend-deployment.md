# Deploying your back-end


|Azure Service|Type|Pros|Cons|Use Cases|
|-------------|----|----|----|---------|
|Virtual Machine|Server| Complete control over how to deploy your app. Select niche runtimes. Complicated folder structures. Install a specific. Install proprietary programs.|A lot more management for developers. Keeping on top of updates. Minimal CI automated workflows avaialbe. Can be a bit pricey because you must have a server running all the time.|You are deploying an applicaiton that has a very particular setup.|
|App Service|Serverless|Quickly deploy web servers. express-node.js, flask-python. App Service can automate your deployment. It will auto generate logs. View incoming requests.|less fine grain control of your application. Only certain runtimes and languages are supported|A web server that does not have a niche set up.
|Azure Functions (Function App)|Serverless|Really fast deployment. Very minimal setup. Cost efficient, usually charged by the second.| Lack customizability. Can only select certain languages and runtimes.You are deploying a bit of code not a full web server. If you wanted to use express.js middleware etc.. not a good choice. **Stateless** because functions can auto-scale and do not run a full server. The execution environment and any in memory values can change. Functions usually timeout in about 1 minute.They are not good for any long running computation.| Glue code. Used to connect one API to another API. Or for simple one-off functionality.|

- **Glue Code**
    - Code used to connect parts of your parts of your microservice application
    - Create quick interfaces to parts of your microservice  application
    - Example
        - frontend wants a JSON {id:"101", full_name:"Billl Smith"}
        - back-end produces a JSON {p_id:101, fname:"Bill",lname:"smith"}
        - a glue code function might act as proxy that calls the backend and generated the JSON the front-end wants
    