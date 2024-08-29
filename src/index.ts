import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import AppDataSource from './database';
import contactRoutes from './routes/Contact';
import equipmentRoutes from './routes/Equipment';
import packRoutes from './routes/Pack';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
} else {
  dotenv.config({ path: '.env.production' });
}

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
}));

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", contactRoutes);
app.use("/", equipmentRoutes);
app.use("/", packRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
