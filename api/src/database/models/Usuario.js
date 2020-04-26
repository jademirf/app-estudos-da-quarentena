'use strict'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { promisify } = require('util')

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
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {}
  )

  user.addHook('beforeSave', async function (user) {
    user.senha = await bcrypt.hash(user.senha, 10)
  })

  user.associate = function (models) {
    user.hasMany(models.Comentario, {
      foreignKey: 'usuarioId',
    })
    user.hasMany(models.Post, {
      foreignKey: 'usuarioId',
    })
  }

  user.prototype.genToken = async function () {
    const promise = promisify(jwt.sign)
    const { id, email } = this
    return await promise({ id, email }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    })
  }

  user.findByCredentials = async (email, password) => {
    const usuario = await user.findOne({ where: { email } })

    if (!usuario) throw new Error('Usuario não encontrado !!')
    if (!usuario.isPassword(password)) throw new Error('Senha incorreta !!')

    return usuario
  }

  return user
}
