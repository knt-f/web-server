const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => {
//     res.send("<h1>Top page</h1>");
// });

// app.get("/about", (req, res) => {
//     res.send("About page");
// });

app.post("/api/v1/quiz", (req, res) => {
    const answer = req.body.answer;
    res.send(answer);
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
    console.log("I am running.");
});