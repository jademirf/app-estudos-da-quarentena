'use strict'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
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
      type: DataTypes.STRING(90),
      allowNull: false,
    },
  })

  usuario.addHook('beforeSave', async function (user) {
    user.senha = await bcrypt.hash(user.senha, 10)
  })

  /* prototypes */

  usuario.prototype.gerarToken = function () {
    return jwt.sign(
      { id: this.id, email: this.email },
      process.env.SECRET_KEY,
      {
        expiresIn: '8h',
      }
    )
  }

  usuario.prototype.isPassword = function (senha) {
    return bcrypt.compare(senha, this.senha)
  }

  /* Class method */
  usuario.findByEmail = async (email, senha) => {
    const user = await usuario.findOne({
      where: {
        email,
      },
    })

    if (!user) throw new Error('usuario não foi encontrado!')

    if (!(await user.isPassword(senha))) throw new Error('Senha incorreta!')

    const token = user.gerarToken()
    return token
  }

  usuario.associate = function (models) {
    // associations can be defined here
    usuario.hasMany(models.post, {
      foreignKey: 'usuarioId',
    })

    usuario.hasMany(models.comentario, {
      foreignKey: 'usuarioId',
    })
  }

  return usuario
}
