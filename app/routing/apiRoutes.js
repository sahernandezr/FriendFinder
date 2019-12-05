var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {

    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });
    
    app.post("/api/friends", (req, res) => {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    });


}
