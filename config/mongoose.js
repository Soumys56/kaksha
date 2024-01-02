
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/kaksha';
mongoose.connect(mongoDB, { useNewUrlParser: true }).then((res)=>console.log("db conne"));
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=>{
    console.log("mongodb connected")
});
module.exports=db;
