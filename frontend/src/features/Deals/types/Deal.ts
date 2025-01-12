import { Account } from "../../Accounts";

export type DealStatus =
  | "Pending"
  | "Active"
  | "Completed"
  | "Cancelled"
  | "Build Proposal"
  | "Pitch Proposal"
  | "Negotiation";

export interface Deal {
  _id: string;
  startDate: Date;
  endDate: Date;
  value: number;
  status: DealStatus;
  account: Account;
  createdAt: string;
  updatedAt: string;
}
