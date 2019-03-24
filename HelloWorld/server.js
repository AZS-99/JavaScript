const HTTP_PORT = process.env.PORT || 8080; //If there is no website, use 8080
const express = require("express"); //Include express class 
const app = express(); //express() is the constructor of express

app.get("/", (req, res) => { //request and respond to lambda 
    res.send("Hello, Adam!");
});

app.listen(HTTP_PORT); //link your app to the http