import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const userSchema = new mongoose.Schema(
  {
    publickey: String,
    name: String,
    email: String,
    password: String,
    registerPark: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parking",
      required: true,
    },
    packingOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parking",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "user",
  }
);
export default mongoose.model("user", userSchema);
