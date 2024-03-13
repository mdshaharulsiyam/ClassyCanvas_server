const { ObjectId } = require("mongodb");
const Order = require("../../models/order");

const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({ message: "BAD REQUEST! Required id" });
    }

    const response = await Order.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "delivered" } }
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

module.exports = updateOrderStatus;
