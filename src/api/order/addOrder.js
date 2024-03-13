const clearCart = require("../../lib/cart/clearCart");
const getCartProduct = require("../../lib/cart/getCartProducts");
const increaseProductSellCount = require("../../lib/product/increaseProductSellCount");
const Order = require("../../models/order");

const addOrder = async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const { transactionID } = req.body;

    if (!transactionID) {
      res.status(400).send({ message: "BAD REQUEST! Transaction ID required" });
    }

    let totalQuantity = 0;
    let totalPrice = 0;

    const cartProducts = await getCartProduct(userID);

    for (const cartProduct of cartProducts) {
      const { product: productID, quantity, price } = cartProduct;

      const updated = await increaseProductSellCount(productID, quantity);
      totalQuantity += quantity;
      totalPrice += price;
    }

    const orderData = {
      user: userID,
      transactionID,
      quantity: totalQuantity,
      price: totalPrice,
    };

    const order = new Order(orderData);

    await order.save();

    const clearStatus = await clearCart(userID);

    res.send({
      insertOne: true,
      cartCleared: clearStatus,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addOrder;
