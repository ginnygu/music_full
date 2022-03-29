import express from "express";
import "dotenv/config";
import logger from "morgan";
import mongoose from "mongoose";

const port = process.env.PORT || 3001;

const app = express();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to mongodb"))
	.catch((error) => console.log(error));

app.use(logger("combined"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
