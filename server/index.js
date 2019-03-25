const express = require("express");
const morgan = require("morgan");
const { listAllObjects, getReleaseURL } = require("./S3Utils");
const { config } = require("./S3Utils");

const initializeServer = () => {
  const app = express();
  app.use(morgan("combined"));

  app.get("/api/releases", async (req, res) => {
    const s3 = config();
    const releases = await listAllObjects(s3).then(releases => {
      //console.log("releases", releases);
      return releases;
    });
    res.json({ releases });
  });

  app.get("/api/releases/:key", async (req, res) => {
    const key = req.params.key;
    const s3 = config();
    const url = await getReleaseURL(s3, key).then(url => {
      console.log("releaseUrl", url);
      return url;
    });
    res.json({ url });
  });

  return app;
};

module.exports = initializeServer;
