const express = require("express")

const app = express();






app.get('/',(req,res)=> {
    res.send("home page of get")
   // console.log("home page  of get")
})









app.listen(1234,function(){
    console.log("listening on port 1234")
})