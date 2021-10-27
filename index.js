const express = require("express");
const { resolve } = require("path");

const app = express();

const port = 3003;

app.use(express.static(resolve(__dirname, "src")));
app.use(express.static(resolve(__dirname, "style")));

app.get("/", function(request, response){
  response.sendFile(resolve(__dirname, "index.html"));
});

app.listen(port, function(){
  console.log("server runnn!!!");
});
