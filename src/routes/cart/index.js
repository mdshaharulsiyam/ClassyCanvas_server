const addToCart = require("../../api/cart/addToCart");
const deleteFromCart = require("../../api/cart/deleteFromCart");
const deleteSingleFromCart = require("../../api/cart/deleteSingleFromCart");
const getCartByUser = require("../../api/cart/getCartByUser");
const getCartTotals = require("../../api/cart/getCartTotals");
const updateCartProductQuantity = require("../../api/cart/updateCartProductQuantity");

const router = require("express").Router();

// GET
router.get("/carts/:id", getCartByUser);
router.get("/cart-total/:id", getCartTotals);

// POST
router.post("/cart", addToCart);

// PUT
router.put("/update-cart-quantity/:id", updateCartProductQuantity);

// DELETE
router.delete("/carts", deleteFromCart);
router.delete("/cart/:id", deleteSingleFromCart);

module.exports = router;
