'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_avaliations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
      } ,
      candidate_id:{
        type: Sequelize.INTEGER,
        references: {model: 'users',key:'id'},
        onUpdate:'CASCADE',
        onDelelte: 'SET NULL',
        allowNull:true,
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
      return queryInterface.dropTable('user_avaliations');
  
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_avaliations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
      } ,
      candidate_id:{
        type: Sequelize.INTEGER,
        references: {model: 'users',key:'id'},
        onUpdate:'CASCADE',
        onDelelte: 'SET NULL',
        allowNull:true,
      },
      
      avaliation_id:{
        type: Sequelize.INTEGER,
        references: {model: 'avaliations',key:'id'},
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
      return queryInterface.dropTable('user_avaliations');
  
  }
};
