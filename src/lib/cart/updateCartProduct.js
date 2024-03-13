const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");
// const Cart = require("../../models/Cart");

const updateCartProduct = async (productID) => {
  try {
    const cartProduct = await Cart.findOne({
      product: new ObjectId(productID),
    }).populate("product");

    console.log(cartProduct);

    if (!cartProduct) {
      return false;
    }

    const response = await Cart.updateOne(
      { product: new ObjectId(productID) },
      {
        $set: {
          quantity: cartProduct.quantity + 1,
          price: cartProduct.price + cartProduct.product.price,
        },
      }
    );

    return true;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
module.exports = updateCartProduct;
