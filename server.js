var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan("combined"));

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/ui/style.css", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "style.css"));
});

app.get("/ui/madi.png", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "madi.png"));
});

app.get("/ui/main.js", function(req, res) {
  res.sendFile(path.join(__dirname, "ui", "main.js"));
});

app.get("/", function(req, res) {
  res.render("index", {
    title: "IMAD Fun App | Homepage",
    page: "home"
  });
});

app.get("/article-one", function(req, res) {
  res.render("articleOne", {
    title: "IMAD Fun App | Article One",
    page: "articleOne"
  });
});

app.get("/article-two", function(req, res) {
  res.render("articleTwo", {
    title: "IMAD Fun App | Article Two",
    page: "articleTwo"
  });
});

app.get("/article-three", function(req, res) {
  res.render("articleThree", {
    title: "IMAD Fun App | Article Three",
    page: "articleThree"
  });
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function() {
  console.log(`IMAD course app listening on port ${port}!`);
});
