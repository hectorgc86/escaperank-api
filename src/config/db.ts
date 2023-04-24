import { Dialect, Sequelize } from "sequelize";

const database = process.env.MYSQL_DATABASE as string;
const username = process.env.MYSQL_USER as string;
const password = process.env.MYSQL_PASSWORD;
const driver = process.env.MYSQL_DRIVER as Dialect;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password,
  {
    host,
    dialect: driver,
    define: {
      timestamps: false
  }
  });
const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión correcta con base de datos");
  }
  catch (e) {
    console.log("Error de Conexión con base de datos", e);
  }
}

export { sequelize, dbConnectMySql };
