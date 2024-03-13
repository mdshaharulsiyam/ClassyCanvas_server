const addBrand = require("../../api/brand/addBrand");
const getAllBrands = require("../../api/brand/getAllBrands");

const router = require("express").Router();

// GET
router.get("/brands", getAllBrands);

// POST
router.post("/brand", addBrand);

module.exports = router;
