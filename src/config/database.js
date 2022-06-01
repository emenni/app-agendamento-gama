module.exports = {
    dialect: 'postgres',
    host: 'motty.db.elephantsql.com',
    username: 'qxmxnuan',
    password: 'senha',
    database: 'qxmxnuan',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
    sslmode: "required",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }