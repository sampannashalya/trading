import express from "express";
import { buyStock, sellStock, getStockPrice } from "../controllers/stockController.js";

const router = express.Router();

router.post("/buy", buyStock);
router.post("/sell", sellStock);
router.get("/price/:symbol", getStockPrice);

export default router;
