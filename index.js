const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs123");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});