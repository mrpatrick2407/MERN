const express=require("express");
const app=express();
const neww=express.static('public');
app.use(neww);
app.listen(4545,function(){
    console.log("listening on port 6215");
});