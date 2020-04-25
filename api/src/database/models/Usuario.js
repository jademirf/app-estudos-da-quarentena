'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'usuario',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      sobreNome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  )
  user.associate = function (models) {
    user.hasMany(models.Comentario, {
      foreignKey: 'usuarioId',
    })
    user.hasMany(models.Post, {
      foreignKey: 'usuarioId',
    })
  }
  return user
}
