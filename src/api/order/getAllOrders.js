const Order = require("../../models/order");

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});

    res.send(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllOrders;
