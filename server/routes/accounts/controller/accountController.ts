import Account from "../model/Account";
import { Request, Response } from "express";

const createAccount = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, email, username, password } = req.body;
		res.status(200).json(req.body);
	} catch (error) {}
};

export { createAccount };
