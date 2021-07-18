const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//app.get("/", function(req, res) {
  //res.sendFile(path.join(__dirname, "index.html"));
//});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/res", function(req, res) {
  return res.json(reservations);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});