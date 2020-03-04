'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
      } ,
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      school_id:{
        type: Sequelize.INTEGER,
        references: {model: 'schools',key:'id'},
        onUpdate:'CASCADE',
        onDelelte: 'SET NULL',
        allowNull:true,
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false

      }
    
    });

  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('avaliations');
  
  }
};
