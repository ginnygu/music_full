import Account from "../model/Account";
import { Request, Response } from "express";

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
		res.status(200).json(req.body);
	} catch (error) {}
};

export { createAccount };
