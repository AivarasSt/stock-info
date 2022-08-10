# Stock Market Info

## Getting Started

### Required programs

* Node.js 

### Installing

#### Server 
* Navigate to server folder:
  ```
  $ cd server
  ```
* Install server dependencies
  ```
  $ npm i
  ```
* Copy .env-example file, rename it to .env and add your environment variables:
  ```
  SERVER_PORT=<Your server port>
  API_KEY=<Your Finnhub API key> (you can get yours by signing up at https://finnhub.io/ and navigating to https://finnhub.io/dashboard)
  DB_CONNECTION=<Your mongodb connection string>
  ```

#### Client
* Navigate to client folder:
  ```
  $ cd client
  ```
* Install client dependencies
  ```
  $ npm i
  ```
* Navigate to client > src > services > company-service and make sure to change baseUrl port to your SERVER_PORT.

### Run project

#### Server

* Navigate to server folder:
  ```
  $ cd server
  ```
* Start server
  ```
  $ npm start
  ```

#### Client

* Navigate to client folder:
  ```
  $ cd client
  ```
* Start client
  ```
  $ npm start
  ```

