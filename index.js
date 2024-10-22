const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

const requestLogger = (req, res, next) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
};

app.use(morgan("dev"));
app.use(requestLogger);

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
