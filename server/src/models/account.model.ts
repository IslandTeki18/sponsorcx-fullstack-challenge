import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema(
  {
    name: String,
    organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
    deals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deal" }],
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", AccountSchema);

export default Account;