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
    patient_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    dosage_remaining: DataTypes.INTEGER,
    dosage_collected: DataTypes.INTEGER,
    viral_level: DataTypes.INTEGER,
  }, {
    underscored: true,
    sequelize,
    modelName: 'Product',
    tableName: 'product'
  });
  return Product;
};