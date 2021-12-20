// DAO 
// Data Access Object, an object/class that is responsible for saving an object somewhere
// DAO should support the basic CRUD operations Create Read Update Delete

import Associate from "../entities/associate";
import {v4} from 'uuid';
import {readFile, writeFile} from 'fs/promises';

export default interface AssociateDAO{

    //CREATE
    createAssociate(associate: Associate): Promise<Associate>;

    //READ
    getAllAssociates(): Promise<Associate[]>;
    getAssociateById(id: string): Promise<Associate>;

    //UPDATE
    updateAssociate(associate: Associate): Promise<Associate>;

    //DELETE
    deleteAssociate(associate: Associate): Promise<Associate>;
}

// implementation class that will use a local file
export class AssociateDaoLocalFile implements AssociateDAO{

    async createAssociate(associate: Associate): Promise<Associate> {
        associate.id = v4();
        const associateData  = await readFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt');
        const associates: Associate[] = JSON.parse(associateData.toString())
        associates.push(associate);
        writeFile('C:\\Users\\AdamRanieri\\Desktop\\RPAS\\associatedata.txt', JSON.stringify(associates));// (path, data to write)
        return associate;
    }

    getAllAssociates(): Promise<Associate[]> {
        throw new Error("Method not implemented.");
    }

    getAssociateById(id: string): Promise<Associate> {
        throw new Error("Method not implemented.");
    }
    updateAssociate(associate: Associate): Promise<Associate> {
        throw new Error("Method not implemented.");
    }
    deleteAssociate(associate: Associate): Promise<Associate> {
        throw new Error("Method not implemented.");
    }
    
}