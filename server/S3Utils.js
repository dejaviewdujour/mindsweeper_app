const AWS = require("aws-sdk");
const config = () => {
  AWS.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  });

  const params = {
    Bucket: process.env.BUCKET
  };
  const s3 = new AWS.S3({
    params
  });
  return s3;
};

function listAllObjects(s3) {
  const listObjects = new Promise(resolve => {
    s3.listObjectsV2((error, data) => {
      if (error) {
        console.error("error: ", error);
        return;
      }

      resolve(data.Contents);
    });
  });

  return listObjects;
}
//StandaloneOSX.zip
function getReleaseURL(s3, key) {
  const getURL = new Promise(resolve => {
    s3.getSignedUrl(
      "getObject",
      {
        Key: key,
        Expires: 60 * 5
      },
      function(err, url) {
        console.log("this is the url", url);
        resolve(url);
      }
    );
  });

  return getURL;
}

module.exports = { config, listAllObjects, getReleaseURL };
