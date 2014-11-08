var myData = require("./server-assets/myData.js");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Method", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/friends', function(req, res) {
    res.send(myData.getFriends());
});
app.get("/family", function(req, res) {
    res.send(myData.getFamily());
});
app.get("/activities", function(req, res) {
    res.send(myData.getActivities());
});
app.get("/me", function(req, res) {
    res.send(myData.getMe());
});


app.post("/family/new", function(req, res){
    res.send(myData.addFamilyMember({name: req.body.name, age: req.body.age, relation: req.body.relation}));
});
app.post("/friends/new", function(req, res){
    res.send(myData.addFriend({name: req.body.name, age: req.body.age, met: req.body.met}));
});
app.post("/activities/new", function(req, res){
    res.send(myData.addActivity({name: req.body.name}));
});
app.post("/me/new", function(req, res){
    res.send(myData.addMe({name: req.body.name, height: req.body.height, favMovie: req.body.favMovie, favArtist: req.body.favArtist}));
});

app.listen(3000);