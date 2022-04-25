'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Order.hasMany(models.DetailOrder,{
        as:"detailorders",
        foreignKey:"orderId",
      })
      models.Order.belongsTo(models.User,{
        as:"users",
        foreignKey:"userId",
      })
      models.Order.belongsTo(models.Payment,{
        as:"payments",
        foreignKey:"paymentId",
      })
      models.Order.belongsTo(models.Shipment,{
        as:"shipments",
        foreignKey:"shipmentId",
      })
    }
  }
  Order.init({
    status: DataTypes.ENUM('paid','unpaid'),
    buktiBayar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};