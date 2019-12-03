var express = require("express");
var path = require("path");

var app = express();
var PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

var friends = [
    {
        name: "Daria Morgendorffer",
        photo: "https://vignette.wikia.nocookie.net/daria/images/d/de/Tumblr_lmpq9bwbyP1qj0esdo1_400.jpg/revision/latest/top-crop/width/200/height/150?cb=20110708181748",
        scores: [
            "5",
            "5",
            "5",
            "1",
            "3",
            "3",
            "3",
            "4",
            "5",
            "1"]
    },
    {
        name: "Jane Lane",
        photo: "https://vignette.wikia.nocookie.net/daria/images/8/83/Jane_Lane_by_Namelessv1.png/revision/latest/top-crop/width/200/height/150?cb=20110708183549",
        scores: [
            "5",
            "3",
            "5",
            "1",
            "5",
            "3",
            "5",
            "2",
            "4",
            "1"
        ]
    }

];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", (req, res) => {
    return res.json(friends);
});

app.post("/api/friends", (req, res) => {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});