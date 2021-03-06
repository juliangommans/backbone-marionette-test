var express = require('express');
var path = require('path');
var Bourne = require("bourne");

var app = express();
var posts = new Bourne("simpleBlogPosts.json");
var comments = new Bourne("simpleBlogComments.json");

app.configure(function(){
 app.use(express.json());
 app.use(express.static(path.join(__dirname, 'public')));
});

app.get("/posts", function (req, res) {
  posts.find(function (results) {
    res.json(results);
  });
});

app.get('/*', function (req, res) {
 res.render("index.ejs");
});

app.post("/posts", function (req, res) {
  posts.insert(req.body, function (result) {
    res.json(result);
  });
});

app.listen(3000);
