const getAvgOrderAmount = require("../../utils/getAvgOrderAmount");
const getTotalOrders = require("../../utils/getTotalOrders");
const getTotalSales = require("../../utils/getTotalSales");

const getSalesSummary = async (req, res, next) => {
  try {
    const totalSales = await getTotalSales();
    const totalOrders = await getTotalOrders();
    const avgOrderAmount = await getAvgOrderAmount();
    res.send({
      totalSales,
      totalOrders,
      avgOrderAmount,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getSalesSummary;
