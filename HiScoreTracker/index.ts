import express from 'express';
import {v4} from 'uuid';
// import multiply from './utils';
// import {add} from './utils'
// import * as mathutils from './utils'



const app = express();
app.use(express.json());// Makes express read any HTTP request bodies as JSON and convert them into Objects automatically

// Resource is going to be Associates
// class Associate{
//     constructor(public fname:string, public lname:string, public id: string, public points: number){}
// }
//const adam = new Associate("Adam", "Ranieri", "fowofoiaoinfewoin", 1000000);
// interfaces in TS do nothing other than define the properties on an object
// all properries in an interface are public
interface Associate{
    fname: string
    lname: string 
    id: string 
    points: number
}

const john: Associate = {fname:"John", lname:'Smith', id:'fasfwefw', points: 100000};
const kris: Associate = {fname:'Kris', lname:"Bothmer", id:"wefwef", points: 10000};

const associates: Associate[] = [john,kris];
// const variables can be edited/mutated
// they just cannot be reassinged

// GET all associates
app.get('/associates', (req,res)=> {

    res.send(associates);
})

// Get a single associate 
app.get('/associates/:aid', (req,res)=>{
    const id: string = req.params.aid;
    const associate: Associate | undefined = associates.find(a => a.id === id); 
    
    if(associate === undefined){
        res.status(404);
        res.send('Associate could not be found')
    }else{
        res.send(associate);
    }
    
});

// create an associate
app.post('/associates', (req,res)=>{
    const associate: Associate = req.body;
    associate.id = v4();
    associates.push(associate);
    res.send("Added associate");
});

// delete an associate with that id
app.delete('/associates/:aid',(req,res)=>{

})

// UPDATE an associate with that id
// The body you send will look like {"fname":"adam", "lname": "Ranieri", "points":90000} 
// You send the WHOLE object again EVEN if you have only changed one or two properites
app.put('/associates/:aid', (req,res)=>{

})


app.listen(3000, ()=>console.log("Application started"))