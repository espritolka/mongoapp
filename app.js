const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
  
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.findOneAndUpdate(
        {name: "Bob"},              // критерий выборки
        { $set: {name: "Sam"}},     // параметр обновления
        {                           // доп. опции обновления    
            returnOriginal: false
        },
        function(err, result){
                 
            console.log(result);
            client.close();
        }
    );
});