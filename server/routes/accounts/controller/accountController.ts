import Account from "../model/Account";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

interface body {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
}
const createAccount = async (req: Request<{}, {}, body>, res: Response) => {
	try {
		const { firstName, lastName, email, username, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPW = await bcrypt.hash(password, salt);
		const newAccount = new Account({
			firstName,
			lastName,
			email,
			username,
			hashedPW,
		});
		await newAccount.save();
		res
			.status(200)
			.json({ message: "Successfully created a new account, please log in" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};

export { createAccount };
