import mongoose from "mongoose";
import { Schema, model } from "mongoose";
interface Account extends mongoose.Document {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	hashedPW: string;
}

const AccountSchema = new Schema<Account>(
	{
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String, lowercase: true, trim: true, required: true },
		username: { type: String, trim: true, required: true },
		hashedPW: { type: String, required: true },
	},
	{ timestamps: true }
);

const Account = model<Account>("account", AccountSchema);
export default Account;
