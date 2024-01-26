import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blog", "SA", "Sullen-Sense", {
  host: "localhost",
  dialect: "mssql",
});
