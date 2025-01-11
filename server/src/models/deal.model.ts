import mongoose from "mongoose";

const DealSchema = new mongoose.Schema(
  {
    startDate: Date,
    endDate: Date,
    value: Number,
    status: {
      type: String,
      enum: ["Pending", "Active", "Completed", "Cancelled"],
    },
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deal", DealSchema);

export default Deal;
