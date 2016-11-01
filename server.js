var express = require("express");
var app = express();

app.get("/api/whoami", function(req, res){
   var response = {
       ipadress: req.headers["x-forwarded-for"],
       language: req.headers["accept-language"],
       software: req.headers["user-agent"]
   };
  res.end(JSON.stringify(response));
    // res.end(req.headers);
});

app.listen(8080, function(){
    console.log("server is actived!");
})
