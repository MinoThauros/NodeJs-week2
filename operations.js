//to offer encapsulation
//as per good software architecture practices, every module ought to do one thing\
//this module will handle every database interractions

const assert= require('assert');



/**
 * Inster a desired document in a collection
 * @param {*} db : to specify the database
 * @param {*} document : inster a particular document in a certain collectin
 * @param {*} collection :name of the desire collectuib
 * @param {*} callback :returns either an error or the instered document
 */
exports.insertDocument=(db, document, collection, callback)=>{
    const coll=db.collection(collection);
    //the document will be plugged in by the main module
    coll.insertOne(document, (err, result)=>{
        assert.strictEqual(err, null);
        console.log(`Inserted ${result.result.n} documents into the collection` );
        callback(result);//gives the other module the freedom to manipulate the result
        //by assigning any fucntion as input we pass the result to that function
    });

};

exports.findDocuments=(db, collection, callback)=>{
    const coll=db.collection(collection);
    coll.find({}).toArray((err,docs)=>{
        assert.strictEqual(err,null);
        console.log('Found some documents');
        callback(docs)
    })
};

exports.removeDocument=(db, document, collection, callback)=>{
    const coll=db.collection(collection);
    coll.deleteOne(document, (err, result)=>{
        assert.strictEqual(err, null);
        console.log(`removed the document ${document}`)
        callback(result)
    })
};

exports.updateDocument=(db, document, update, callback)=>{
    const coll=db.collection(collection);
    coll.updateOne(document,{$set: update}, null, (err, result)=>{
        assert.strictEqual(err, null);
        console.log("updated the document with" + update);
        callback(result);
        
    } )
};