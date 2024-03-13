const createPaymentIntent = require("../../api/payment/createPaymentIntent");

const router = require("express").Router();

// POST
router.post(
  "/create-payment-intent",

  createPaymentIntent
);

module.exports = router;
