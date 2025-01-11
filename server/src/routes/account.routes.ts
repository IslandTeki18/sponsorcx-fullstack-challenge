import express from "express";
const router = express.Router();
import {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/account.controller.ts";

router.route("/").get(getAccounts).post(createAccount);
router
  .route("/:id")
  .get(getAccountById)
  .put(updateAccount)
  .delete(deleteAccount);

export default router;
