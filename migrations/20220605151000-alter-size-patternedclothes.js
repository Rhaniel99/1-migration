'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('patterned-clothes', 'size', {
       type: Sequelize.STRING(2),
       allowNull: true,
       
     })
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropColumn('patterned-clothes', 'size');
  }
};
