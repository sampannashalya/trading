import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Stock = mongoose.model("Stock", stockSchema);
export default Stock;
