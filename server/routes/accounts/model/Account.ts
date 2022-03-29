import { Schema, model } from "mongoose";
interface Account {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	hashedPW: string;
}

const AccountSchema = new Schema<Account>({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String, lowercase: true, trim: true, required: true },
	username: { type: String, lowercase: true, trim: true, required: true },
	hashedPW: { type: String, required: true },
});

export default model("account", AccountSchema);
