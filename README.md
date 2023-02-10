# OpenHIM-POC
OpenHIM--proof of concept
## Overview
OpenHIM-POC (Proof of Concept) is a simple application designed to demonstrate how a request can be taken and passed on to another service. It serves as an example of how the OpenHIM (Open Health Information Mediator) can be used to mediate between different systems, ensuring that the data is properly formatted and transmitted in a secure manner.

## Getting Started
To get started with OpenHIM-POC, you will need to have the following installed on your computer:
##### 1. Node.js
##### 2. Yarn
##### 4. Docker Compose
You can download the latest version of Node.js from the official website (https://nodejs.org). Yarn can be installed by following the instructions on the official website (https://yarnpkg.com/getting-started). Docker and Docker Compose can be installed by following the instructions on the Docker website (https://docs.docker.com/compose/install/).

Once you have the required software installed, you can clone the OpenHIM-POC repository to your local machine. Navigate to the root directory of the project and run the following command to install the required dependencies:

## Installation
openhim-poc requires [Node.js](https://nodejs.org/) v14.18.1 to run.
Install the dependencies and devDependencies and start the server.

```sh
cd openhim-poc
yarn
yarn dev
```
The application should now be running and you can start making requests to it.

## How it work
When a request is made to OpenHIM-POC, it first checks to see if the required data is present and in the correct format. If everything checks out, the request is then passed on to the next service for processing. If there are any issues with the request, OpenHIM-POC will respond with an error message indicating what went wrong.

## How to test
To test OpenHIM-POC, you can make a request to the /ping route on localhost:3000. This will trigger the /openhim route, which will then make a request to the /ping route on localhost:4000 from open him. The response from the second route will then be passed back to the /ping route on localhost:3000, and you will finally see the response from your original request. You can also 

Here's an example of how you can test OpenHIM-POC using curl:
Request
```sh
curl http://localhost:3000/ping
```
Response
```sh
{
"response": "Hello from service 2"
}
```

## OpenHIM Console
In addition to the application, OpenHIM-POC also comes with a built-in OpenHIM console that allows you to view all the requests that have been processed by the OpenHIM API. This console shows the request and response details, including the status, errors, and any other relevant information.

The OpenHIM console can be accessed by navigating to http://localhost:9000 in your web browser. From there, you can view a detailed log of all the requests that have been processed by OpenHIM, including the request method, URL, headers, and response data. This information can be used to diagnose issues and monitor the performance of the system.
```sh
username: root@openhim.org
password: openhim-password
```
To verify your test you can 
1. Hit "http://localhost:3000/ping" url from browser.
2. Login to openhim console "http://localhost:9000".
3. Go to Transcation log from left navigation.
4. Click on you request and check Status & Orchestrations response of Service2 -> Ping.

## Conclusion
OpenHIM-POC is a simple application that demonstrates how a request can be taken and passed on to another service using the OpenHIM API. It serves as a starting point for building more complex applications that need to mediate between different systems. The use of Yarn, Docker, and Docker Compose makes it easy to manage dependencies and run the application in a controlled environment.

