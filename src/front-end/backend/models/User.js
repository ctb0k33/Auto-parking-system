import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import AutoIncrementFactory from "mongoose-sequence";
const AutoIncrement = AutoIncrementFactory(mongoose);
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
// userSchema.plugin(AutoIncrement, { int_field: "_id" });
export default mongoose.model("user", userSchema);
