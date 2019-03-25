const express = require("express");
const morgan = require("morgan");
const { s3 } = require("./S3Utils");

const initializeServer = () => {
  const app = express();
  app.use(morgan("combined"));

  app.get("/api/releases", async (req, res) => {
    console.log("s3 ==>", s3);
    console.log("======> hello world");
    res.json({ hello: "world" });
  });

  return app;
};

module.exports = initializeServer;
