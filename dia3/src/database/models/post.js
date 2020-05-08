'use strict'
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    'post',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      titulo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      assunto: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      tipoMaterialId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      areaConhecimentoId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {}
  )
  post.associate = function (models) {
    // associations can be defined here
    post.belongsTo(models.usuario, {
      foreignKey: 'usuarioId',
    })

    post.hasMany(models.comentario, {
      foreignKey: 'postId',
    })
  }
  return post
}
