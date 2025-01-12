import mongoose from "mongoose";

const DealSchema = new mongoose.Schema(
  {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    value: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "Pending",
        "Active",
        "Completed",
        "Cancelled",
        "Build Proposal",
        "Pitch Proposal",
        "Negotiation",
      ],
      required: true,
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deal", DealSchema);

export default Deal;
