import mongoose from "mongoose";
import { User } from "../types/user.types";


const userSchema = new mongoose.Schema<User>({
  name: {type: String, required: true},
  cc: { type: String, required: true },
  email: { type: String, required: true },
  accountNumber: { type: String, required: true},
  amountTransaction: { type: String, required: true},
  balance: { type: Number, required: true},
  birthDate: { type: String, required: true },
  cel: { type: String, required: true },
  address: { type: String, required: true }
});

const UserSchema = mongoose.model("Users", userSchema);
export { UserSchema };