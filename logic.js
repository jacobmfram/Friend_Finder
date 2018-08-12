var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var matches = [
    {
        name: "test1",
        picture: "link to picture",
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1,
        q5: 1,
        q6: 1,
        q7: 1,
        q8: 1,
        q9: 1,
        q10: 1,
        diff: 0
    },
    {
        name: "test2",
        picture: "link to picture",
        q1: 2,
        q2: 2,
        q3: 2,
        q4: 2,
        q5: 2,
        q6: 2,
        q7: 2,
        q8: 2,
        q9: 2,
        q10: 2,
        diff: 0
    },
    {
        name: "test3",
        picture: "link to picture",
        q1: 3,
        q2: 3,
        q3: 3,
        q4: 3,
        q5: 3,
        q6: 3,
        q7: 3,
        q8: 3,
        q9: 3,
        q10: 3,
        diff: 0
    },
    {
        name: "test4",
        picture: "link to picture",
        q1: 4,
        q2: 4,
        q3: 4,
        q4: 4,
        q5: 4,
        q6: 4,
        q7: 4,
        q8: 4,
        q9: 4,
        q10: 4,
        diff: 0
    },
    {
        name: "test5",
        picture: "link to picture",
        q1: 5,
        q2: 5,
        q3: 5,
        q4: 5,
        q5: 5,
        q6: 5,
        q7: 5,
        q8: 5,
        q9: 5,
        q10: 5,
        diff: 0
    }
];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/findmatches", function(req, res) {
    res.sendFile(path.join(__dirname, "matches.html"));
});



app.get("/api/matches", function(req, res) {
    return res.json(matches);
});

app.post("/api/matches", function(req, res) {
    var newMatch = req.body
    matches.push(newMatch);
    res.json(newMatch);
});