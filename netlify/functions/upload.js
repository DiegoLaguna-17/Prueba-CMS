import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: "https://1b6e35810769bb32da1401cd5f6ad91e.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const file = body.file; // base64
    const fileName = body.name;

    const buffer = Buffer.from(file, "base64");

    await client.send(
      new PutObjectCommand({
        Bucket: "cms-media",
        Key: fileName,
        Body: buffer,
        ContentType: "image/jpeg",
      })
    );

    const url = `https://pub-4cb52416ccd048d8bbd2581c34b82329.r2.dev/${fileName}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};