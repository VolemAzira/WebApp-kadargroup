import { Sequelize } from "sequelize";

const Db = new Sequelize("test_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default Db;
