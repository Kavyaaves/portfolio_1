import fs from "fs";
import path from "path";
import { S3Client, ListObjectsRequest, ListObjectsCommand } from '@aws-sdk/client-s3';
// export default (req, res) => {
// 	const dirPath = req.query.name;
// 	const dir = path.resolve("./public/algae/" + dirPath);
// 	const filenames = fs.readdirSync(dir);
// 	res.statusCode = 200;
//     res.json(filenames);
// };

export default async (req, res) => {

  const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
    },
  });
	const response = await s3Client.send(new ListObjectsCommand({
		client: s3Client,
		Bucket: "babu-portfolio",
	    Prefix:"algae/" + req.query.name,
	}));
	const fileNames = response.Contents?.map((res) => res.Key.replace("algae/" + req.query.name + "/", ""));
	console.log(fileNames, "server")
	res.status(200).json(fileNames);
}