'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4
      },
      status: {
        type: Sequelize.ENUM('paid','unpaid'),
        default: 'unpaid'
      },
      buktiBayar: {
        type: Sequelize.STRING,
        default: ""
      },
      address: {
        type: Sequelize.STRING,
        default: ""
      },
      city: {
        type: Sequelize.STRING,
        default: ""
      },
      postCode: {
        type: Sequelize.STRING,
        default: ""
      },
      note: {
        type: Sequelize.STRING,
        default: ""
      },
      userId: {
        type: Sequelize.UUID,
        reference: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};