require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASS,
    database: "traffic_db",
    host: process.env.HOST,
    dialect: "mysql"
  },
  test: {
    username: process.env.USER,
    password: process.env.PASS,
    database: "testdb",
    host: process.env.HOST,
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
