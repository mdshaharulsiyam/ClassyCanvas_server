const Order = require("../models/order");

const getTotalOrders = async (req, res, next) => {
  try {
    const totalOrders = await Order.estimatedDocumentCount();
    return totalOrders;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = getTotalOrders;
