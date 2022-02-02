# Docker
- The problem 
    - Deploying back-ends/applications is difficult
        - Applications have a lot of requirements to run
            - Specific environment variables
            - Specific file structure for your app to use
            - Specific runtime
                - node.js
                    - maybe node 14 not node 6
                - python
            - Computers have different operating systems
            - Starting an app require knowledge of the application
                - node npm start or ts-node or 
                - python3 py
                - ruby
                - Execute the command in the correct directory
            - You have to know what port your application is listening on 
- Solutions
    - deal with it
        - Makes deployment difficult
        - you get a virtual machine spend hours configuring it
    - Serverless options
        - All serverless options have their own learning curve
            - constantly forgetting GCP vs Azure vs AWS configurations and UI
        - Serverless options give you less control of the application
            - Might have to have a specific file structure
            - Run a specific runtime
    - **Containerize** The docker solution
        - Build a virtual environment for your application
        - Ship your application in a virtual environment
- Docker
    - Is **containerization software**
    - Put applications into easily distrubutable formats
- Docker Circle of life
    1. **Dockerfile**
        - A script that will generate an image
    2. **Image**
        - A blue print for a container
        - Class
    3. **Container**
        - Instance of an image
        - Object

```bash
docker build . -t greeting-app
# docker build dirctoryofdockerfile -tag nameofimage

docker run -p 4000:3000 greeting-app
# docker run -port outsideport:containerport image
# Create a runnning instance of the image AKA a container

docker kill 17108hdje # container id

docker ps # view all running containers

```
## Container vs VM
- VM Virtual Machine
    - A heavyweight virtualization option
    - It has its own Operating System
    - Has its own memory CPU and hard drive
    - **Azure Virtual Machine**
- Container 
    - Lightweight virtualization
    - They run on top of an Operating system
        - Usually linux for docker
    - They are just a linux process
    - More like a running application on a machine
        - Having excel open
        - Having a desktop app running

![Container vs VM](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltb6200bc085503718/5e1f209a63d1b6503160c6d5/containers-vs-virtual-machines.jpg)

### Best practicies for containers
- usually a container should have only 1 running application inside of it
- Containers are good for *stateless* applications
    - Containers ephemeral 
        - Any data inside a container is lost forever when killed

### Kubernetes K8s
- Container Orchestration Managment Software
    - Allows you to run dozens to thousands of conatiner with dynamic auto-scaling and rounting
    - Runs of a cluster of vms

        