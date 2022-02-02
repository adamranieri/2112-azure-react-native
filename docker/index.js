const express = require('express')

const app = express()

let counter = 0;
const instanceID = Math.random()

app.get("/greetings", (req, res)=>{
    counter += 1
    console.log(`Request number ${counter} was processed`)
    res.send(`Greetings you are request number ${counter} from server ${instanceID}`)

})

app.listen(3000,()=>console.log(`Application with id ${instanceID} started`))