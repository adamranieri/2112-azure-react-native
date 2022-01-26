import { Team } from "./entities";
import { TeamDAO, TeamDaoPostgres } from "./team-dao";
import { pgClient } from "./connection";

const teamDAO:TeamDAO = new TeamDaoPostgres()

async function run() {
    // const team:Team = await teamDAO.getTeamById(1)
    // console.log(team)
    const team:Team = {tId:0,name:"Muttonchop Mountaineers", hometown:"Morgantown", masoct:"The Mountaineer"};
    const returnedTeam = await teamDAO.createTeam(team);
    console.log(returnedTeam)
    pgClient.end()
}

run()