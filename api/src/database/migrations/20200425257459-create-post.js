'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
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
      tipoMaterialId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tipoMaterial',
          key: 'id',
        },
      },
      areaConhecimentoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'areaConhecimento',
          key: 'id',
        },
      },
      usuarioId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
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
    return queryInterface.dropTable('post')
  },
}
