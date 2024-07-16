import { DataSource } from "typeorm";
import dotenv from "dotenv";
import Contact from "./entity/Contact";

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: dotenv.MYSQL_HOST || 'localhost',
    port: dotenv.MYSQL_PORT || 3307,
    username: dotenv.MYSQL_USER,
    password: dotenv.MYSQL_PASSWORD,
    database: dotenv.MYSQL_DATABASE,
    entities: [Contact],
    synchronize: true,
});

export default AppDataSource;