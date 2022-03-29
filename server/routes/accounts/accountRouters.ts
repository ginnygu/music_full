import express from "express";
const router = express.Router();
import { createAccount } from "./controller/accountController";

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

router.post<empty, apiResponse<account>>("/create-account", createAccount);

export default router;
