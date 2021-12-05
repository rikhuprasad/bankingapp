var express = require("express");
var templates = require("./database/templates.js");

var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
