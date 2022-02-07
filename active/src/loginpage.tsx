import { useMsal } from "@azure/msal-react"

export default function LoginPage(){

    const {instance} = useMsal()
    
    function login(){
        instance.loginPopup()
    }

    return(<>
        <h1>You are not authenticated</h1>
        <button onClick={login}>Login</button>
    </>)
}