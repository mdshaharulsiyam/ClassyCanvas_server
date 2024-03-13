const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const updateCartProductQuantity = async (req, res, next) => {
  try {
    const { quantity, price } = req.body || {};
    const { id } = req.params;
    // console.log(id);

    if (!quantity || !price) {
      res
        .status(400)
        .send({ message: "BAD REQUEST! Quantity and Price required" });
    }

    const dataToUpdate = {
      quantity,
      price: price * quantity,
    };

    const response = await Cart.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: dataToUpdate,
      }
    );

    res.send({
      updateOne: response.modifiedCount > 0,
      status: response.acknowledged,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = updateCartProductQuantity;
