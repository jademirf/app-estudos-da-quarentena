'use strict'
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    'usuario',
    {
      id: DataTypes.UUID,
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {}
  )
  usuario.associate = function (models) {
    // associations can be defined here
  }
  return usuario
}
