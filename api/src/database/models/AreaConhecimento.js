'use strict'
module.exports = (sequelize, DataTypes) => {
  const areaConhecimento = sequelize.define(
    'areaConhecimento',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  )
  areaConhecimento.associate = function (models) {
    // associations can be defined here
  }
  return areaConhecimento
}
