const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(210).send("Hello World");
})

module.exports = app;