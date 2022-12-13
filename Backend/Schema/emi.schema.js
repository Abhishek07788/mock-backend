const mongoose = require("mongoose");

const emiSchema = new mongoose.Schema({
  LoanAmount: { type: Number },
  AnnualInterestRate: { type: Number },
  TenureInMonths: { type: Number },
});

const EMI = mongoose.model("emi", emiSchema);
module.exports = EMI;
