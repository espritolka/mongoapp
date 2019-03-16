const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.updateOne(
        {name: "Tom"}, 
        { $set: {name: "Tom Junior", age:33}},
        function(err, result){
                  
            console.log(result);
            client.close();
        }
    );
});