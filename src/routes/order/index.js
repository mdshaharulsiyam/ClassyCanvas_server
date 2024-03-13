const addOrder = require("../../api/order/addOrder");
const getAllOrders = require("../../api/order/getAllOrders");
const getOrdersByUser = require("../../api/order/getOrdersByUser");
const updateOrderStatus = require("../../api/order/updateOrderStatus");

const router = require("express").Router();

// GET
router.get("/orders/:id", getOrdersByUser);
router.get("/orders", getAllOrders);

// POST
router.post("/order/:id", addOrder);

// PATCH
router.patch("/order/:id", updateOrderStatus);

module.exports = router;
