import fs from "fs";
import path from "path";

export default (req, res) => {
	const dirPath = req.query.name;
	const dir = path.resolve("./public/algae/" + dirPath);
	const filenames = fs.readdirSync(dir);
	res.statusCode = 200;
    res.json(filenames);
};
