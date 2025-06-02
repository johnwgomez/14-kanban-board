import { Sequelize } from 'sequelize';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables.');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;