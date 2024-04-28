import express from "express";
import {
  getMenus,
  getMenuById,
  saveMenu,
  updateMenu,
  deleteMenu,
} from "../controllers/MenuController.js";

const router = express.Router();

router.get("/menus", getMenus);
router.get("/menus/:id", getMenuById);
router.post("/menus", saveMenu);
router.patch("/menus/:id", updateMenu);
router.delete("/menus/:id", deleteMenu);

export default router;
