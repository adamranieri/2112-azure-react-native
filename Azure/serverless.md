# Server and Serverless

- Any deployed backend/web server hast to ultimately be running on a server somewhere in the world
- A phycical a machine that you own
- A virtual machine provisioned from a cloud provier

## Server
- **Infrastructure as a Service**
    -  A cloud offering that gives the developer essentially virtual hardware
        - Examples
            - Azure Virtual Machine
            - Azure Disk (The hard drive associated with a virtual machine)
- Advantages
    - High level of control of your resource/server
        - Get an exact operating System
        - Specific hardware stats
        - Intsall proprietary/custom programs
- Disadvantges
    - A lot more efforr to set up rather than serverless
    - A lot more maitnence than serverless
    - Often more expensive than serverless
        - Serverless offering tend to dynamically scale to meet demand
        - Often charge you by the minute

# Serverless
- **Platform as a Service**
    - A cloud offering that give the developer a base to build off of
    - The platform just requires the source code a bit of configuration
- Advantages
    - Faster to develop and deploy
    - Developer friendly
    - Often cheaper 
    - More optimized/auto scaling usage
- Disadvantages
    - Lose fine grain control of the application
    - You have to adhere to rules set by that platform
    - Persistent data storage *can* be more difficult
- Most serverless apps strive to *stateless* 
    - Do not rely on in memory sessions
    - Do not rely on local files
    - **REST** is a stateless architecture



