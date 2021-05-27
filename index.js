const MongoClient = require('mongodb').MongoClient;
//creates a new instance
const assert= require('assert');
const dboper= require('./operations');



const url= 'mongodb://localhost:27017/';//from the started mongoDB
const dbname= 'conFusion';//use showdb in  mongo do see a list of all databases

MongoClient.connect(url,(err, client)=>{

    assert.strictEqual(err,null);//perfom a check; that error really is equal to null

    console.log('Connected correctly to the server');

    const db=client.db(dbname);//connect to the desired database

    const document1={
        "name":"Vadonut",
        "description":'Test_Document 1'
    };

    const collection= 'dishes'


    dboper.insertDocument(db, {
        "name":"Vadonut",
        "description":'Test_Document 1'
    }, collection, (result)=>{
        //implementation of the callback
        console.log('Instert Document: \n' + result.ops)
    });

    dboper.findDocuments(db,collection, (result)=>{
        console.log(`Found Documents: \n ${result} `);
        console.log(result);//returns all the content of the database
    
    });




});

