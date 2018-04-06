const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let friends = ["A", "b", "c"];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    let newfriend = req.body.newfriend;
    friends.push(newfriend);
    console.log(friends);
    res.redirect("/friends");
});

app.listen(3000);

