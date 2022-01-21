# Week 6 Review

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
    - A lot more effort to set up rather than serverless
    - A lot more maitnence than serverless
    - Often more expensive than serverless
        - Serverless offering tend to dynamically scale to meet demand
        - Often charge you by the minute

## Serverless
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
    - Persistent data stored with the application *can* be more difficult
        - Saving data to an external database is the ideal
- Most serverless apps strive to *stateless* 
    - Do not rely on in memory sessions
    - Do not rely on local files
    - **REST** is a stateless architecture

# Linux
- The most common operating system for Web Server
    - Advantages
        - Huge Developer Community
        - Lightweight 
            - No bloatware slowing down your application
        - Most are open source
            - Usually a good thing for security
            - Any security threats are noticed by the community at large very quickly
        - In-built package managers
            - Allows for quickly installing software
                - yum
                - apt
    - Disadvantages
        - Not beginner friendly
        - No graphical component in most distros
            - People like graphics
- Unix
    - The first really popular OS
        - Not popular anymore because it is not free
    - From the 70's when most people did not have their own computer
    - Most computing was done on a single maingrame where multiple actives users used the machine at once
        - This origin is part of the reason why changing permisssions and root user sudo access is so prevalent in linux

## Common Linux commands
```bash

pwd # print working directory
ls # list show what files and folders are in the current directory
touch # creates a file
clear # removes text from screen
ps # used to list all running processes on the computer
top # show running processes
kill # to terminate a process
disown # to disconnect a process from the users terminal
& # run a process in the background
man # manual
cat # print out contents of a file

# making and moving files
touch # make a file
mv # move
cp # copy past
rm # remove
mkdir # making a directory

# Root User
sudo # super user do


## Text Editors in most linux distros
nano # bad
vim # extra bad (there is too much vim hate)

```

## XSS
- Cross Site Scripting
- A security vulnerability where external JS is executed on the browser
    - That JS could be used to get sensitive information from local storage or cookies
        