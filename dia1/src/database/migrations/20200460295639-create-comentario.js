'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comentario', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      usuarioId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
          onDelete: 'CASCADE',
        },
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      texto: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comentario')
  },
}
