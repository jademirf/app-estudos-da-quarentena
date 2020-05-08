'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      titulo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      assunto: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      usuarioId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      tipoMaterialId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tipoMaterial',
          key: 'id',
          onDelete: 'CASCADE',
        },
      },
      areaConhecimentoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'areaConhecimento',
          key: 'id',
          onDelete: 'CASCADE',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('post')
  },
}
