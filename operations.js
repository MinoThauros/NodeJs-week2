//to offer encapsulation
//as per good software architecture practices, every module ought to do one thing\
//this module will handle every database interractions

const assert= require('assert');



/**
 * Inster a desired document in a collection; feeds the .insertOne() function
 * @param {*} db : to specify the database
 * @param {*} document : inster a particular document in a certain collectin
 * @param {*} collection :name of the desire collectuib
 * @param {*} callback :returns either an error or the instered document
 */
exports.insertDocument=(db, document, collection)=>{
    const coll=db.collection(collection);
    //the document will be plugged in by the main module
    //coll.insertOne(document, (err, result)=>{
        //assert.strictEqual(err, null);
        //console.log(`Inserted ${result.result.n} documents into the collection` );
        //callback(result);//gives the other module the freedom to manipulate the result
        //-by assigning any function as input we pass the result to that function
    return coll.insertOne(document);
    //we deleted the callback functions because we already know these function will return a promise
    // promises  allow us to handle the return of a function without using callbacks
    };

exports.findDocuments=(db, collection, callback)=>{
    const coll=db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument=(db, document, collection, callback)=>{
    const coll=db.collection(collection);
    return  coll.deleteOne(document);
};

exports.updateDocument=(db, document, update, collection, callback)=>{
    const coll=db.collection(collection);
    return coll.updateOne(document,{$set: update}, null)
        
    
};