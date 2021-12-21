import { CosmosClient } from "@azure/cosmos";
import Associate from "../entities/associate";
import { v4 } from "uuid";

const client = new CosmosClient('AccountEndpoint=https://rpas-cosmosdb-account-ranieri.documents.azure.com:443/;AccountKey=WI6NMjGOafJE8GSebzHpDX8qjZzaVfFQ4lbBc2Ak2O4624TlNMLFVtepn5SeLpwEarm1G3GKU6xlCTzNwjGlVQ==;');
const database = client.database('rpas-db');
const container = database.container('Associates');

async function addAssociate(associate: Associate){
    const response = await container.items.create(associate)
    console.log(response);
}

const bill: Associate = {fname:"Bill", lname:"Gates", points: -10000, id: v4()}

addAssociate(bill);