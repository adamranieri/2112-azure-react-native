import AssociateDAO, { AssociateDaoLocalFile } from "../daos/associate-dao"
import AssociateDaoAzure from "../daos/associate-dao-azure";
import Associate from "../entities/associate";
import NotFoundError from "../errors/not-found-error";

describe("Associate Dao Tests", ()=>{

    const associateDao: AssociateDAO = new AssociateDaoAzure()
    let savedAssociate:Associate = null

    it("Should create an associate", async ()=>{
        const noob: Associate = {fname:"Jimmy", lname:"JavaScript", points:100, id:''}
        savedAssociate =  await associateDao.createAssociate(noob);
        expect(savedAssociate.id).not.toBeFalsy();
    });

    it("Should get an associate by ID", async ()=>{
        const retrievedAssociate: Associate = await associateDao.getAssociateById(savedAssociate.id);
        expect(retrievedAssociate.fname).toBe("Jimmy");
        expect(retrievedAssociate.lname).toBe("JavaScript");
    });


    it("Should update an associate", async () => {
        const updatedAssociate: Associate = {fname:"James", lname:"TS", points:5000, id: savedAssociate.id}
        //const updatedAssociate: Associate = {...savedAssociate, fname:"James", lname:"TS", points:5000, }
        await associateDao.updateAssociate(updatedAssociate);

        const retrivedAssociate: Associate = await associateDao.getAssociateById(updatedAssociate.id);
        expect(retrivedAssociate.fname).toBe("James")
    })

    it("should delete an associate", async () => {
        await associateDao.deleteAssociateById(savedAssociate.id)

        expect(async ()=> {
            await associateDao.getAssociateById(savedAssociate.id)
        }).rejects.toThrowError(NotFoundError)
        
    })


})