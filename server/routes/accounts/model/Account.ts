import { Schema } from "mongoose";
interface Account {
	firstName: string;
	lastName: string;
	email: string;
	userName: string;
	hashedPW: string;
}

const AccountSchema = new Schema<Account>({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String, lowercase: true, trim: true, required: true },
	userName: { type: String, lowercase: true, trim: true, required: true },
	hashedPW: { type: String, required: true },
});
