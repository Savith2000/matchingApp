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
    number2: 1,
    number3: 1,
    number4: 1,
    number5: 1,
    number6: 1,
    number7: 1,
    number8: 1,
    number9: 1,
    number10: 1,
  },

  {
    routeName:"savith",
    name: "Savith",
    number1: 2,
    number2: 2,
    number3: 2,
    number4: 2,
    number5: 2,
    number6: 2,
    number7: 2,
    number8: 2,
    number9: 2,
    number10:2,
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
