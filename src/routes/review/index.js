const addReview = require("../../api/review/addReveiw");

const router = require("express").Router();

// POST
router.post("/review", addReview);

module.exports = router;
