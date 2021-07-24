const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let user = [
  {
    routeName:"jason",
    name: "Jason",
    number1: 1,
    number2: 5,
    number3: 3,
    number4: 4,
    number5: 5,
    number6: 3,
    number7: 1,
    number8: 2,
    number9: 3,
    number10: 4,
  },
];



app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/user", function (req, res) {
  return res.json(user);
});

app.get("/api/:user", function (req, res) {
  var table = req.params.user;

  console.log(table);

  for (var i = 0; i < user.length; i++) {
    if (table === user[i].routeName) {
      return res.json(user[i]);
    }
  }

  return res.json(false);
});

app.post("/user", function (req, res) {
 
  console.log(req.body);
  const newuser = req.body;

  newuser.routeName = newuser.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(newuser);

  user.push(newuser);

  res.json(newuser);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
