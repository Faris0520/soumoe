var express = require("express");
var http = require("http");
var app = express()

app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`UR PROJECT LINK`);
}, 25000); 

// hooh tenan
