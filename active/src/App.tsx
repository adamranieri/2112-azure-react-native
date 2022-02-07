

import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import LoginPage from "./loginpage";
import HomePage from "./homepage";

const configuration:Configuration = {
  auth: {
    clientId: "95adaac8-3fac-4fb3-9950-de016420446f",
    authority: "https://login.microsoftonline.com/eb95f4d2-f463-4287-a1a3-c0cd08ea40fc",
    redirectUri: "http://localhost:3000/"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  
}

const client = new PublicClientApplication(configuration)

function App() {
  return (
    <MsalProvider instance={client}>

      <UnauthenticatedTemplate>
        <LoginPage/>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <HomePage/>
      </AuthenticatedTemplate>


   
    
    </MsalProvider>
  );
}

export default App;
