'use strict'

const { AreaConhecimento } = require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return AreaConhecimento.bulkCreate(
      [
        {
          nome: 'Front-end',
        },
        {
          nome: 'Back-end',
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('areaConhecimento', null, {})
  },
}
