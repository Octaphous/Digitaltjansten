const express = require("express");
const app = express();

const port = 8090;

app.use(express.static("public"));
app.listen(port, () => console.log("Server open on port " + port));