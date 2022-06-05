'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('patterned-clothes', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
      nomeclothes: {
        type: Sequelize.STRING, 
        allowNull: false,

      },
      amount:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  }, 

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('patterned-clothes');
  }
};
