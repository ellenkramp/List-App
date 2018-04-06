const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/friends", (req, res) => {
    let friends = ["A", "b", "c"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    res.send("YOU HAVE REACHED POST");
});

app.listen(3000);

