const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const clearCart = async (userID) => {
  try {
    const result = await Cart.deleteMany({ user: new ObjectId(userID) });
    // console.log(result);
    return result?.deletedCount > 0 || result;
  } catch (error) {
    return error;
  }
};

module.exports = clearCart;
