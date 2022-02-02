# script that will build an Image
FROM node 
# FROM baseImage what is the background environment to run the application in
COPY . /workspace

EXPOSE 3000
# app runs on port 3000

WORKDIR /workspace
# specify the directory in the virtual environment to run commands in

ENTRYPOINT [ "node","index.js" ]
# command to start the application