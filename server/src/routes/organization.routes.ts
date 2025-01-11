import express from "express";
const router = express.Router();

import {
  getOrganizations,
  getOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from "../controllers/organization.controller.ts";

router.route("/").get(getOrganizations).post(createOrganization);
router
  .route("/:id")
  .get(getOrganizationById)
  .put(updateOrganization)
  .delete(deleteOrganization);

export default router;
