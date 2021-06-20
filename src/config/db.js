import { Sequelize } from 'sequelize';

const connectionString = process.env.DB_DSN;

const sequelize = new Sequelize(connectionString);

export default sequelize;
