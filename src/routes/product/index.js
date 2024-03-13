const addProduct = require("../../api/product/addProduct");
const deleteSingleProduct = require("../../api/product/deleteSingleProduct");
const getNewArrivals = require("../../api/product/getNewArrivals");
const getPaginationProduct = require("../../api/product/getPaginationProduct");
const getProductFilter = require("../../api/product/getProductFilter");
const getSingleProduct = require("../../api/product/getSingleProduct");
const getSuggestProduct = require("../../api/product/getSuggestProduct");
const getTotalProductCount = require("../../api/product/getTotalProductCount");

const router = require("express").Router();

// GET
router.get("/new-arrivals", getNewArrivals);
router.get("/product/:id", getSingleProduct);
router.get("/suggested-product", getSuggestProduct);
router.get("/product-count", getTotalProductCount);
router.get("/products", getPaginationProduct);

// POST
router.post("/product", addProduct);
router.post("/products", getProductFilter);

// DELETE
router.delete("/product/:id", deleteSingleProduct);

module.exports = router;
