import Account from "../models/account.model.ts";
import { Request, Response } from "express";

// GET all Accounts
export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find().populate("organization");
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching accounts", error });
  }
};

// GET a single Account by ID
export const getAccountById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const account = await Account.findById(req.params.id).populate(
      "organization"
    );
    if (!account) {
      res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: "Error fetching account", error });
  }
};

// POST a new Account
export const createAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = new Account(req.body);
    const savedAccount = await newAccount.save();
    res.status(201).json(savedAccount);
  } catch (error) {
    res.status(500).json({ message: "Error creating account", error });
  }
};

// PUT an existing Account by ID
export const updateAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, organization } = req.body;
    const updatedAccount = await Account.findByIdAndUpdate(
      req.params.id,
      { name, organization },
      { new: true }
    );
    if (!updatedAccount) {
      res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: "Error updating account", error });
  }
};

// DELETE an Account by ID
export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if (!deletedAccount) {
      res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting account", error });
  }
};