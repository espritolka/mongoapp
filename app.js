const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
 
    if(err) return console.log(err);
      
    collection.find().toArray(function(err, results){
                 
        console.log(results);
        client.close();
    });
});