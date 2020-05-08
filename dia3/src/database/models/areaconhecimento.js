'use strict'
module.exports = (sequelize, DataTypes) => {
  const areaConhecimento = sequelize.define(
    'areaConhecimento',
    {
      name: DataTypes.STRING,
    },
    {}
  )
  areaConhecimento.associate = function (models) {
    // associations can be defined here
  }
  return areaConhecimento
}
