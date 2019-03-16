const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.updateMany(
        {name: "Sam"},              // критерий фильтрации
        { $set: {name: "Bob"}},     // параметр обновления
        function(err, result){
                  
            console.log(result);
            client.close();
        }
    );
});