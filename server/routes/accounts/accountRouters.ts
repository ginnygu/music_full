import express from "express";
const router = express.Router();
import { createAccount } from "./controller/accountController";
import { validateInput } from "../middleware/validateInput";

interface account {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
}
interface apiResponse<Data> {
	data: Data;
}
interface empty {}

router.post<empty, apiResponse<account>>(
	"/create-account",
	validateInput,
	createAccount
);

export default router;
