const MongoClient = require('mongodb').MongoClient;
//creates a new instance
const assert= require('assert');


const url= 'mongodb://localhost:27017/';//from the started mongoDB
const dbname= 'conFusion';//use showdb in  mongo do see a list of all databases

MongoClient.connect(url,(err, client)=>{

    assert.strictEqual(err,null);//perfom a check; that error really is equal to null

    console.log('Connected correctly to the server');

    const db=client.db(dbname);//connect to the desired database
    const collection = db.collection('dishes');//connect to the desired collection
    //use the commands use <databasename> and then show collection
    //connect to a certain database then show the collections inside
    //a nosql database is made out of documents->collections

    collection.insertOne({
        "name":"Herimino",
        "Description":"Test"
    }, (err,result)=>{//nested callback
        assert.strictEqual(err,null);

        console.log('After insert: \n')
        console.log(result.ops);//will show wat was inserted

        collection.find({}).toArray((err,docs)=>{
            assert.strictEqual(err, null);
            console.log('Found:\n');
            console.log(docs);//a callback function directly manipulates a function's input

            db.dropCollection('dishes', (err, result)=>{
                assert.strictEqual(err, null);
                client.close();
            })
        });//find({}) would return everything as quiery conditions weren't specified
        //would put everything into a dictionary-like array
    });


});

