'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_model: DataTypes.STRING,
    buy_price: DataTypes.INTEGER,
    sell_price: DataTypes.INTEGER
  }, {
    underscored: true,
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};