'use strict';
module.exports = (sequelize, DataTypes) => {
  const comentario = sequelize.define('comentario', {
    usuarioId: DataTypes.UUID,
    postId: DataTypes.UUID,
    texto: DataTypes.STRING
  }, {});
  comentario.associate = function(models) {
    // associations can be defined here
  };
  return comentario;
};