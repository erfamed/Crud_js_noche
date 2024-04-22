import { Sequelize } from "sequelize";

const BD = new Sequelize('citasbd', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
});

export default BD;