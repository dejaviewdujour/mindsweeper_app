const express = require("express");
const path = require("path");
const app = require("./server")();

app.use(express.static(path.join(__dirname, "./dist")));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
