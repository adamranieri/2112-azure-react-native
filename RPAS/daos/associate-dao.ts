// DAO 
// Data Access Object, an object/class that is responsible for saving an object somewhere
// DAO should support the basic CRUD operations Create Read Update Delete

import Associate from "../entities/associate";
import {v4} from 'uuid';
import {readFile, writeFile} from 'fs/promises';
import NotFoundError from "../errors/not-found-error";

export default interface AssociateDAO{

    //CREATE
    createAssociate(associate: Associate): Promise<Associate>;

    //READ
    getAllAssociates(): Promise<Associate[]>;
    getAssociateById(id: string): Promise<Associate>;
    getAssociatesPointsGreaterThan(points: number): Promise<Associate[]>;
    

    //UPDATE
    updateAssociate(associate: Associate): Promise<Associate>;

    //DELETE
    deleteAssociateById(id: string): Promise<Associate>;
}

// implementation class that will use a local file
export class AssociateDaoLocalFile implements AssociateDAO{
    getAssociatesPointsGreaterThan(points: number): Promise<Associate[]> {
        throw new Error("Method not implemented.");
    }

    async createAssociate(associate: Associate): Promise<Associate> {
        associate.id = v4();
        const associateData: Buffer  = await readFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt');
        const associates: Associate[] = JSON.parse(associateData.toString())
        associates.push(associate);
        await writeFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt', JSON.stringify(associates));// (path, data to write)
        return associate;
    }

    async getAllAssociates(): Promise<Associate[]> {
        const associateData: Buffer = await readFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt');
        const associates: Associate[] = JSON.parse(associateData.toString());
        return associates;
    }

    async getAssociateById(id: string): Promise<Associate> {
        //const associateData: Buffer = await readFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt');
        const associates: Associate[] = await  this.getAllAssociates()
        const associate: Associate = associates.find(a => a.id === id);

        if(!associate){
            throw new NotFoundError("Associate could not be found", id);
        }

        return associate;
    }


    async updateAssociate(associate: Associate): Promise<Associate> {
        const associates: Associate[] = await this.getAllAssociates();
        let found = false;
        for(let i = 0; i < associates.length; i++){
            if(associates[i].id === associate.id){
                associates[i] = associate;
                found = true;
            }
        }
        if(!found){
            throw new NotFoundError("Associate could not be found for an update", associate.id);
        }

        await writeFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt',JSON.stringify(associates))

        return associate;
    }

    async deleteAssociateById(id: string): Promise<Associate> {
        const associates: Associate[] = await this.getAllAssociates();
        const associate: Associate = await this.getAssociateById(id);
        let found = false;

        for(let i = 0; i < associates.length; i++){
            if(associates[i].id === id){
                associates.splice(i,1);
                found = true;
            }
        }
        if(!found){
            throw new NotFoundError("Associate was not found and could not be deleted", id);
        }

        await writeFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt',JSON.stringify(associates))

        return associate;

    }
    
}