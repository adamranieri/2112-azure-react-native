### Reservations API
- API that holds a list of reservations

```ts
interface Reservation{
    id:string
    checkIn: number
    checkOut: number
    owner: string
    room: string
}
```
- Routes
    - GET /reservations
    - GET /reservations/:id

- Implementation Details
    - postman mock-server
---

### Event API
- Tracks events
- A Simple API that allows for creating and updating events
```ts
interface Event{
    id: string
    title: string
    desc: string
    startTime: number
    endTime: number
    location: string
    status: "On Schedule" | "Cancelled"
}

```
- Routes 
    - GET /events
    - GET /events/:id
    - POST /events
    - PUT /events
- Example Post
    - http://localhost:8080/events
```json
    {"id":0, "title":"Sample Event", "desc":"Awesome Thing", "startTime":123123123,"endTime":123123300, "location":"Ballroom","status":"On Schedule"}
```

- Example Put
    - http://localhost:8080/events/7
```json
    {"id":7, "title":"Sample Event", "desc":"Awesome Thing", "startTime":123123123,"endTime":123123300, "location":"Ballroom","status":"Cancelled"}
```

- Implementation details
    - Written in express
    - Available as a docker image
    - uses an in memory database
        - will be lost when restarting or shutting down the container
- Deployment
    - Deployed as a conatiner on Azure Container Instances
---
### Room Service API
- Allows for creating/viewing and updating room service requests
- DTOs 
```ts
interface ServiceRequest{
    id: string
    room: string
    created: number
    status: "Ordered" | "Processing" | "Completed" | "Cancelled"
    requestedOffering: Offering[]
}

interface Offering{
    desc: string
    cost: number
}
```

- Routes
    - GET /offerings => returns all available offering for room service
    - GET /servicerequests
    - GET /servicerequests/:id
    - POST /servicerequests => adds a new service request
    - PATCH /servicerequests/:id/processing
    - PATCH /servicerequests/:id/completed

- Implementation Details
    - Uses express.js
    - saves to a Cosmos DB container

- Deployement Details
    - Deploy on a Linux Virtual Machine

---
### Problem API

```ts
interface ProblemSubmission{
    desc: string
    base64Photo?: string

}

interface Problem{
    id: string
    submittedTime: number
    desc: string
    status: "Unreviewed" | "Reviewed"
    photoLink?: string
}
```
- Routes
    - GET /problems
    - GET /problems/:id
    - PATCH /problems/:id/reviewed

- Implemenation and Deployment
    - This Application uses 100% Serverless options
    - You will write one function to  injest ProblemSubmissions
        - It will upload the photo to a bick and get a link at this point
    - This will upload to a Service Bus Queue
    - Another function will read the Queue to add it to a Cosmos DB
    - Lastly you will write another function that serves as the API

---
### Employee API
```ts
interface Employee{
    id: number
    isManager: boolean
    fname: string
    lname: string
    username: string
    password: string
}

interface WorkLog{
    wId: number
    type: "CHEKIN" | "CHECKOUT" 
    timestamp: number
}
```

- Routes
    - PATCH /login
    - GET /worklogs
    - POST /worklogs

- Implementation
    - Uses PostgreSQL
    - Uses Prisma
    - Express.js for route handling
- Deployment
    - Deploy on App Service
