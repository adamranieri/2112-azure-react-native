import express from 'express';
import AssociateDAO, { AssociateDaoLocalFile } from './daos/associate-dao';
import Associate from './entities/associate';
import NotFoundError from './errors/not-found-error';

const app = express();
app.use(express.json())

const associateDao: AssociateDAO = new AssociateDaoLocalFile();

app.get('/hello', (req, res)=>{
    res.send("Hello");
})

app.get("/associates", async (req,res)=>{
    const associates: Associate[] = await associateDao.getAllAssociates();
    res.send(associates)
});

app.get('/associates/:id', async (req,res)=>{
    //const id = req.params.id;
    try {
        const {id} = req.params;
        const associate: Associate = await associateDao.getAssociateById(id)
        res.send(associate)    
    } catch (error ) {
        
        if(error instanceof NotFoundError){
            res.status(404);
            res.send(`The resource with id ${error.resourceId} could not be` )
        }else{
            res.status(500);
            res.send("Something went very wrong")
        }      
    }
 
});

// Alawys cretes a new associate
app.post("/associates", async (req,res)=>{
    const associate: Associate = req.body;
    const savedAssociate: Associate = await associateDao.createAssociate(associate)
    res.send(savedAssociate);
});

// JSON replacement object
app.put('/associates/:id', async (req,res)=>{
    const associate: Associate = req.body;
    const updatedAssociate: Associate = await associateDao.updateAssociate(associate)
    res.send("Update was successful id: " + updatedAssociate.id)
});

app.delete('/associates/:id', async (req, res)=>{
    const {id} = req.params;
    const deletedAssociate: Associate = await associateDao.deleteAssociateById(id)
    res.send("Deleted the associate succesfully id: " + deletedAssociate.id);
});

// patches are updates which have specific instructions

app.patch('/associates/:id/deduct/:amount', async (req, res) =>{
    const {id, amount} = req.params;
    const associate: Associate = await associateDao.getAssociateById(id)
    associate.points -= Number(amount);
    associateDao.updateAssociate(associate);
    res.send("associate patch successfully");

})



app.listen(3000, () => console.log("Started Application"))
