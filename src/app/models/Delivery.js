const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
        message: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'order' });
  }
}

module.exports = Delivery;
