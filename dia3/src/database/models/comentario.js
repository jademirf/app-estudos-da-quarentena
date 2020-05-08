'use strict'
module.exports = (sequelize, DataTypes) => {
  const comentario = sequelize.define(
    'comentario',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      usuarioId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      postId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      texto: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  )
  comentario.associate = function (models) {
    comentario.belongsTo(models.post, {
      foreignKey: 'postId',
    })

    comentario.belongsTo(models.usuario, {
      foreignKey: 'usuarioId',
    })
  }
  return comentario
}
