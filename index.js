const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/submit-form", (req, res) => {
    res.send("Form submitted successfully");
});

app.listen(port, () => {
    console.log(`ALAB318.2.1 app listening at http://localhost:${port}`);
});
