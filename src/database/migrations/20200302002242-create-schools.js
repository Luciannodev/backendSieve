'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schools', {
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
      limit_age:{
        type:Sequelize.INTEGER,   
      },
      choice_gender:{
        type:Sequelize.STRING,
      },
      limit_nota:{
        type:Sequelize.INTEGER,
      },
      id_institution:{
        type: Sequelize.INTEGER,
        references: {model: 'users',key:'id'},
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
      return queryInterface.dropTable('schools');
  
  }
};
