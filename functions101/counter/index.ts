import { AzureFunction, Context, HttpRequest } from "@azure/functions"

let value = 0;

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    value++
   
    context.res = {
        status:200,
        body: `The value is ${value}`
    };

};

export default httpTrigger;