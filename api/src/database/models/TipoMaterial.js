'use strict'
module.exports = (sequelize, DataTypes) => {
  const tipoMaterial = sequelize.define(
    'tipoMaterial',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  tipoMaterial.associate = function (models) {
    // associations can be defined here
  }
  return tipoMaterial
}
