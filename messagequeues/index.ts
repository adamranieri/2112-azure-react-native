import { ServiceBusClient } from "@azure/service-bus";

const client = new ServiceBusClient("Endpoint=sb://ranieri-villas.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=CdNey8PkGaGBBND2Awt9npNDBwzSyBPUAMYkZWSpenM=")
const producer = client.createSender("problem")// createProducer

const issue = {desc:"The floor was wet outside the room and I slipped"}

async function sendToQueue(){
   await producer.sendMessages({body:JSON.stringify(issue)});
   // does not event RETURN anything 
   client.close()
}
// it does start a background process that keeps the program running
sendToQueue()
