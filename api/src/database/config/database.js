require('dotenv').config()
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_ROOT,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  define: {
    // prevent sequelize from pluralizing table names
    freezeTableName: true,
    underscored: false,
  },
}
