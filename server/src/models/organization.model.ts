import { timeStamp } from "console";
import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema(
  {
    name: String,
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model("Organization", OrganizationSchema);

export default Organization;
