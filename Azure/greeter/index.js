const express = require('express');
const app = express();

app.get('/hello', (req,res)=>{
    res.send("Hello 2.0!!!")
})

app.get("/environment", (req,res)=>{
    res.send(`The environment variable is ${process.env.NAME}`)
})

app.get("/connection", (req,res)=>{
    res.send(` The connection environment variable is ${process.env.CUSTOMCONNSTR_COSMOS}`)
})

// Use an enivonrment variable called PORT if available
app.listen(process.env.PORT ?? 3000, ()=>console.log("started"))