import express from "express";
const router = express.Router();
import {
  getDeals,
  getDealById,
  createDeal,
  updateDeal,
  deleteDeal,
} from "../controllers/deal.controller.ts";

router.route("/").get(getDeals).post(createDeal);
router.route("/:id").get(getDealById).put(updateDeal).delete(deleteDeal);

export default router;
