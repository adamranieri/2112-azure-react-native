import { useMsal } from "@azure/msal-react"


export default function HomePage(){

    const {instance} = useMsal()
    const account = instance.getAllAccounts()[0]

    function logout(){
        instance.logoutPopup()
    }
    

    return(<>
        <h1>Logged in as {account.username}</h1>
        <button onClick={logout}>Logout</button>
    </>)
}