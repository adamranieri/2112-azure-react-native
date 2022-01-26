import { Client } from "pg";

export const pgClient = new Client({
    host:'ranieri-rev-points-server.postgres.database.azure.com',
    user:'adam',
    password:'',
    database:'basketball_db',
    ssl:true
});
pgClient.connect()


// async function setUpDb(){

//     await pgClient.connect()
//     const sql = "select * from team";
//     const result = await pgClient.query(sql);
//     pgClient.end();// terminate connection
// }

// setUpDb()