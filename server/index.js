const express = require("express");
const morgan = require("morgan");

const initializeServer = () => {
  const app = express();
  app.use(morgan("combined"));

  app.get("/api/objects", async (req, res) => {
    console.log("======> hello world");
    res.json({ hello: "world" });
  });

  return app;
};

module.exports = initializeServer;
