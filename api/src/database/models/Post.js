'use strict'
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    'post',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      tipoMaterialId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      areaConhecimentoId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {}
  )
  post.associate = function (models) {
    post.hasMany(models.Comentario, {
      foreignKey: 'postId',
    })
    post.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
    })
  }
  return post
}
