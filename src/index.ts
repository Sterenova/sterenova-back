import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import AppDataSource from './database';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

app.use(bodyParser.json());

app.use('/', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
