import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: "https://1b6e35810769bb32da1401cd5f6ad91e.r2.cloudflarestorage.com",
  accessKeyId: process.env.R2_ACCESS_KEY,
  secretAccessKey: process.env.R2_SECRET_KEY,
  signatureVersion: "v4",
  region: "auto"
});

export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    const file = Buffer.from(body.file, "base64");

    const fileName = `${Date.now()}-${body.filename}`;

    const upload = await s3.upload({
      Bucket: "cms-media",
      Key: fileName,
      Body: file,
      ContentType: body.type
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: upload.Location
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}