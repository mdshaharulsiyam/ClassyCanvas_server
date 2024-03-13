const getOrderCountByGender = require("../../api/summary/getOrderCountByGender");
const getSalesSummary = require("../../api/summary/getSalesSummary");

const router = require("express").Router();

// GET
router.get("/sales-summary", getSalesSummary);
router.get("/order-count-by-gender", getOrderCountByGender);

module.exports = router;
