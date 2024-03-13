const updateCartProduct = require("../../lib/cart/updateCartProduct");
const Cart = require("../../models/Cart");

const addToCart = async (req, res, next) => {
  try {
    const data = req.body;

    const updated = await updateCartProduct(data.product);
    console.log("Updated", updated);
    if (updated) {
      res.send({
        insertOne: false,
        updateOne: true,
      });
    } else {
      const cart = new Cart(data);
      await cart.save();

      res.send({
        insertOne: true,
        updateOne: false,
      });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addToCart;
