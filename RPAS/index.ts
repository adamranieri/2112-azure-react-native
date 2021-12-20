import express from 'express';
import AssociateDAO, { AssociateDaoLocalFile } from './daos/associate-dao';
import Associate from './entities/associate';

const app = express();
app.use(express.json())

const associateDao: AssociateDAO = new AssociateDaoLocalFile();

app.get('/hello', (req, res)=>{
    res.send("Hello");
})

// app.get("/associates", null);
// app.get('/associates/:id', null);

app.post("/associates", async (req,res)=>{
    const associate: Associate = req.body;
    const savedAssociate: Associate = await associateDao.createAssociate(associate)
    res.send(savedAssociate);
});

// app.put('/associates/:id', null);

// app.delete('/associates/:id', null);


app.listen(3000, () => console.log("Started Application"))
