const MongoClient = require('mongodb').MongoClient;
//creates a new instance
const assert= require('assert');
const dboper= require('./operations');



const url= 'mongodb://localhost:27017/';//from the started mongoDB
const dbname= 'conFusion';//use showdb in  mongo do see a list of all databases

MongoClient.connect(url)
.then((client)=>{
    console.log('Connected correctly to the server');
    const db=client.db(dbname);//connect to the desired database
    const document1={
        "name":"Vadonut",
        "description":'Test_Document 1'
    };
    const document2={
        "name":"Vadonut",
        "description":'updated Test_Document'
    };
    const collection= "dishes";

    dboper.insertDocument(db, {
        "name":"Vadonut",
        "description":'Test_Document 1'}, collection)//we built it so that it returns the result of the operation
    .then((result)=>{
        //implementation of the callback
        console.log('Instert Document: \n' + result.ops);
        return dboper.findDocuments(db,collection)})
    .then((result)=>{
        console.log(`Found Documents: \n ${result} `);
        console.log(result);//returns all the content of the database
        return dboper.updateDocument(db, {name:"Vadonut"}, {description: "updated Test twice"}, "dishes")})
    .then((response)=>{// no need to specify the entire document
        console.log("Updated documents: \n", response.result);//search criteria is one propriety
        //.result returns the numbers of successful operations
        return dboper.findDocuments(db, collection)
    .then((docs)=>{
        console.log("Found updated documents:\n", docs);
        client.close();//client gotta be closed
        //callback methods cause increased complexity; it becomes increasingly difficult to analyze the code
        //Required in order to perform sequencial functions
                });
            });   
        })
.catch((err=>{
    console.log(err);
}))

//the .then design pattern allows to handle the return of previous function
//effectively allowing sequencial algorithms
//but preventing the callback hell
//all the other

