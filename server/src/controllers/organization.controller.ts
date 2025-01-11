import Organization from "../models/organization.model.ts";
import { Request, Response } from "express";

// GET all Organizations
export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await Organization.find().populate("accounts");
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organizations", error });
  }
};

// GET a single Organization by ID
export const getOrganizationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const organization = await Organization.findById(req.params.id).populate(
      "accounts"
    );
    if (!organization) {
      res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organization", error });
  }
};

// POST a new Organization
export const createOrganization = async (req: Request, res: Response) => {
  try {
    const newOrganization = new Organization(req.body);
    const savedOrganization = await newOrganization.save();
    res.status(201).json(savedOrganization);
  } catch (error) {
    res.status(500).json({ message: "Error creating organization", error });
  }
};

// PUT an existing Organization by ID
export const updateOrganization = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    const updatedOrganization = await Organization.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedOrganization) {
      res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json(updatedOrganization);
  } catch (error) {
    res.status(500).json({ message: "Error updating organization", error });
  }
};

// DELETE an Organization by ID
export const deleteOrganization = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedOrganization = await Organization.findByIdAndDelete(
      req.params.id
    );
    if (!deletedOrganization) {
      res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json({ message: "Organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting organization", error });
  }
};
