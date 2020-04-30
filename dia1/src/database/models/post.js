'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    titulo: DataTypes.STRING,
    assunto: DataTypes.STRING,
    decricao: DataTypes.STRING,
    tipoMaterialId: DataTypes.UUID,
    areaConhecimentoId: DataTypes.UUID
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};