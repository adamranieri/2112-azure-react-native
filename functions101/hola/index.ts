import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    context.log('You triggered my http function');
  
    context.res = {
        status:200,
        body: "Hola"
    };

};

export default httpTrigger;