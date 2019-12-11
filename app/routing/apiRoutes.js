var express = require("express");
var path = require("path");
var friends = require("../data/friends");

var app = express();

module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });

    app.post("/api/friend", (req, res) => {
        var newFriend = req.body;
        friends.push(newFriend);
        

        var bestMatch = {
            name: "",
            photo: ""
          };

        var allMatches = [];

        
            for (var i = 0; i < friends.length-1; i++) {
                var matchScores = [];

                for (var j = 0; j < friends[i].scores.length; j++) {
                    matchSc = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                    matchScores.push(matchSc)
                };

                var SMNUMBER = matchScores.reduce(myFunc);

                function myFunc(total, num) {
                    return total + num;
                }

                //console.log(matchScores);
                //console.log(SMNUMBER);
                allMatches.push(SMNUMBER);

                
            }
                // console.log(allMatches);
                // console.log("Min " + (Math.min(...allMatches)));
                // console.log("Index of min " + (allMatches.indexOf(Math.min(...allMatches))));
                bestMatch.name = friends[(allMatches.indexOf(Math.min(...allMatches)))].name;
                bestMatch.photo = friends[(allMatches.indexOf(Math.min(...allMatches)))].photo;
                console.log("Best match name: " + bestMatch.name);
                console.log("Best match photo: "+ bestMatch.photo);

                res.json(bestMatch);

    


       

    });

    
}
