const { ObjectId } = require("mongodb");
const Order = require("../../models/order");

const getOrdersByUser = async (req, res, next) => {
  try {
    const { id } = req.params || {};
    if (!id) {
      res
        .status(400)
        .send({ message: "BAD REQUEST! Required id" })
        .select("transactionID quantity price orderDate status");
    }
    const orders = await Order.find({ user: new ObjectId(id) });
    res.send(orders);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getOrdersByUser;
