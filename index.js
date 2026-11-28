const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Afterhour Cafe</h1><p>Welcome to Afterhour Cafe!</p>");
});

app.listen(PORT, () => {
    console.log("Afterhour Cafe running at http://localhost:" + PORT);
});