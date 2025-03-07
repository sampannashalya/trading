import axios from "axios";
import Stock from "../models/Stock.js";
import User from "../models/User.js";

// Buy Stock
export const buyStock = async (req, res) => {
  try {
    const { userId, symbol, quantity, buyPrice } = req.body;

    const stock = new Stock({ userId, symbol, quantity, buyPrice });
    await stock.save();

    await User.findByIdAndUpdate(userId, { $push: { portfolio: stock } });

    res.json({ message: "Stock purchased successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error buying stock" });
  }
};

// Sell Stock
export const sellStock = async (req, res) => {
  try {
    const { userId, stockId } = req.body;

    await Stock.findByIdAndDelete(stockId);
    await User.findByIdAndUpdate(userId, { $pull: { portfolio: { _id: stockId } } });

    res.json({ message: "Stock sold successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error selling stock" });
  }
};

// Fetch Stock Prices
export const getStockPrice = async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await axios.get(`https://api.polygon.io/v2/last/trade/${symbol}?apiKey=YOUR_API_KEY`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stock price" });
  }
};
