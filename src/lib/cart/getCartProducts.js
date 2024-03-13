const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const getCartProduct = async (userID) => {
  try {
    const products = await Cart.find({ user: new ObjectId(userID) });

    return products;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = getCartProduct;
