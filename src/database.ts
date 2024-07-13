import { DataSource } from "typeorm";
import dotenv from "dotenv";
import Contact from "./entity/Contact";

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Contact],
    synchronize: true
});

export default AppDataSource;