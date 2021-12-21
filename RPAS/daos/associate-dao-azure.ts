import { CosmosClient } from "@azure/cosmos";
import { v4 } from "uuid";
import Associate from "../entities/associate";
import NotFoundError from "../errors/not-found-error";

import AssociateDAO from "./associate-dao";

const client = new CosmosClient(process.env.COSMOS_CONNECTION)
const database = client.database('rpas-db');
const container = database.container('Associates');

export default class AssociateDaoAzure implements AssociateDAO{
    async getAssociatesPointsGreaterThan(points: number): Promise<Associate[]> {
      
        const query = container.items.query(`SELECT * FROM Associates WHERE points > ${points}`)
        const response = await query.fetchAll();
        return response.resources
    }

    async createAssociate(associate: Associate): Promise<Associate> {
        associate.id = v4();
        const response = await container.items.create(associate);
        return response.resource
    }

    async getAllAssociates(): Promise<Associate[]> {
        const response = await container.items.readAll<Associate>().fetchAll();
        return response.resources
    }

    async getAssociateById(aid: string): Promise<Associate> {
        const response = await container.item(aid,aid).read<Associate>()
        
        // if the response.resource is undefined it means you did not fetch anythng
        if(!response.resource){
            throw new NotFoundError("Resource could not be found", aid);
        }
        // is there a shorter syntax to get an pbject with these specific properties
        const {fname,lname,points,id} = response.resource   
        return {fname,lname,points,id}
    }
    
    async updateAssociate(associate: Associate): Promise<Associate> {
        const response = await container.items.upsert<Associate>(associate);
        return response.resource
    }
    async deleteAssociateById(id: string): Promise<Associate> {
        const associate = await this.getAssociateById(id)
        const response = await container.item(id,id).delete();
        return associate;
    }
}