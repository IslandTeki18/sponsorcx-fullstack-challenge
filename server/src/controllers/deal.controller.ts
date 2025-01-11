import Deal from "../models/deal.model.ts";
import { Request, Response } from "express";

// GET all Deals
export const getDeals = async (req: Request, res: Response) => {
  try {
    const deals = await Deal.find().populate("account");
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deals", error });
  }
};

// GET a single Deal by ID
export const getDealById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deal = await Deal.findById(req.params.id).populate("account");
    if (!deal) {
      res.status(404).json({ message: "Deal not found" });
    }
    res.status(200).json(deal);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deal", error });
  }
};

// POST a new Deal
export const createDeal = async (req: Request, res: Response) => {
  try {
    const newDeal = new Deal(req.body);
    const savedDeal = await newDeal.save();
    res.status(201).json(savedDeal);
  } catch (error) {
    res.status(500).json({ message: "Error creating deal", error });
  }
};

// PUT an existing Deal by ID
export const updateDeal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, account } = req.body;
    const updatedDeal = await Deal.findByIdAndUpdate(
      req.params.id,
      { name, account },
      { new: true }
    );
    if (!updatedDeal) {
      res.status(404).json({ message: "Deal not found" });
    }
    res.status(200).json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: "Error updating deal", error });
  }
};  

// DELETE an Deal by ID
export const deleteDeal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedDeal = await Deal.findByIdAndDelete(req.params.id);
    if (!deletedDeal) {
      res.status(404).json({ message: "Deal not found" });
    }
    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting deal", error });
  }
};
