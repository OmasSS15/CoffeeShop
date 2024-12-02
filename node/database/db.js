import { Sequelize } from "sequelize";

const db = new Sequelize('coffee_shop', 'root', '0506OMa$',{
    host:'localhost',
    dialect:'mysql',
    port: 3306
})

export default db