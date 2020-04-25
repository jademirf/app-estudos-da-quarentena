'use strict'

const { TipoMaterial } = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return TipoMaterial.bulkCreate(
      [
        {
          material: 'Estudo',
        },
        {
          material: 'Free-lance',
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipoMaterial', null, {})
  },
}
