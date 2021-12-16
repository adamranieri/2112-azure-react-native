import express from 'express';

const app = express();

app.get("/hello", (req, res)=>{
    res.status(404);
    res.send("Hello Everybody");  
});

app.get('/hola', (req,res)=>{
    res.send('Hola');
})

app.get('/greet/:fname', (req,res)=>{
    const name: string = req.params.fname;
    res.send(`Great to meet you ${name}`);
});


app.listen(3000, ()=> console.log("The application has started"));