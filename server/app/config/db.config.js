module.exports = {
    HOST: "localhost",
    PORT: '5433',
    USER: "postgres",
    PASSWORD: "admin",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };