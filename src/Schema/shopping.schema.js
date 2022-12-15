const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Quantity: { type: Number, required: true },
    Priority: { type: String, enum: ["low", "medium", "high"], required: true },
    DateAndTimestamp: { type: String, default: new Date() },
    Description: { type: String, required: true },
  },
  { timestamps: true }
);

const Shopping = mongoose.model("shopping", ShoppingSchema);
module.exports = Shopping;