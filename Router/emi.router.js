const express = require("express");
const Emi = require("../Schema/emi.schema");

const app = express.Router();

// --------------- (Emi) ------------------
app.post("/", async (req, res) => {
  const { LoanAmount, AnnualInterestRate, TenureInMonths } = req.body;

  const r = AnnualInterestRate / 12 / 100;
  const emi = (
    (LoanAmount * r * (1 + r) * TenureInMonths) /
    ((1 + r) * TenureInMonths - 1)
  ).toFixed(2);
  const E = await Emi.create({ emi });

  res.send({ emi, message: "Got it" });
});

module.exports = app;
