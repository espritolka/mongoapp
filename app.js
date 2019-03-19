const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
 
const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);
 
User.find({"age":34}, function(err, docs){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log(docs);
});