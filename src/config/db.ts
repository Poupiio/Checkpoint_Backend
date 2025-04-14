import { Country } from "../entities/Country";
import { DataSource } from "typeorm";

export const dataSourceDb = new DataSource({
   database: "backend.sqlite",
   type: "sqlite",
   entities: [Country],
   synchronize: true,
   logging: ["error", "query"]
});