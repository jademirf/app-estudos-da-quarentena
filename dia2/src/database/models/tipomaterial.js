'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoMaterial = sequelize.define('tipoMaterial', {
    material: DataTypes.STRING
  }, {});
  tipoMaterial.associate = function(models) {
    // associations can be defined here
  };
  return tipoMaterial;
};