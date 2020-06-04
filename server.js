let express = require("express");
let app=express();


app.get("/:name.js",(req,res)=>{
    res.sendFile(__dirname+`/${req.params.name}.js`);
});
app.get("/HereExample",(req,res)=>{
    res.sendFile(__dirname+"/here.html");

})
app.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.listen(80);