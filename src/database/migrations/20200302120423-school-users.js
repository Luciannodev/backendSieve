'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('school_users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
      },
      id_studant:{
        type: Sequelize.INTEGER,
        references: {model: 'users',key:'id'},
        onUpdate:'CASCADE',
        onDelelte: 'SET NULL',
        allowNull:false,
      },
      id_school:{
        type:Sequelize.INTEGER,
        references:{model:'schools',key:'id'},
        allowNull:false,
        onUpdate:'CASCADE',
        onDelelte:'SET NULL'
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
      return queryInterface.dropTable('school_users');
  
  }
};
