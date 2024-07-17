import { DataSource } from "typeorm";
import dotenv from "dotenv";
import Contact from "./entity/Contact";

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3307', 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [Contact],
    synchronize: true,
});

export default AppDataSource;