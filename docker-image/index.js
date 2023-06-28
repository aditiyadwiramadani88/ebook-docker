const http = require('http');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL


const url = "mongodb://localhost:27017";
const client = new MongoClient(url);


//create a server object:
http.createServer(async( req, res) => {

// connections 
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('data');
    const collection = db.collection('documents');

    // check request post 
    if(req.method == "POST") { 
      // insrting document 
        const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(insertResult))
        res.end();
        return;

  } 


  // find all data 
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.write(JSON.stringify(findResult)); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
