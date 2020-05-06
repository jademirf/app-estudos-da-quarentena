'use strict'
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    'usuario',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'E-mail em formato invalido',
          },
        },
      },
      senha: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  )
  usuario.associate = function (models) {
    // associations can be defined here
    usuario.hasMany(models.post, {
      foreignKey: 'usuarioId',
    })
  }
  return usuario
}
