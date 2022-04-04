import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isStrongPassword from "validator/lib/isStrongPassword";
import { Request, Response, NextFunction } from "express";

interface notEmpty {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
}
interface errObjData {
	firstName?: string;
	lastName?: string;
	email?: string;
	username?: string;
	password?: string;
}

export const validateInput = (
	req: Request<{}, {}, notEmpty>,
	res: Response,
	next: NextFunction
) => {
	const errObj: errObjData = {};
	const { firstName, lastName, email, username, password } = req.body;
	if (!isAlpha(firstName)) {
		errObj.firstName =
			"first name should only have letters, no special characters or numbers";
	}
	if (!isAlpha(lastName)) {
		errObj.lastName =
			"last name should only have letters, no special characters or numbers";
	}
	if (!isAlphanumeric(username)) {
		errObj.username = "username should not contain special characters or space";
	}
	if (!isEmail(email)) {
		errObj.email = "Please use a valid email";
	}
	if (!isStrongPassword(password)) {
		errObj.password =
			"Your password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long";
	}
	const errObjLength = Object.keys(errObj).length;
	if (errObjLength > 0) {
		res.json({ error: errObj });
	} else {
		next();
	}
};
