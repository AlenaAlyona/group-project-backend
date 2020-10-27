import "reflect-metadata";
import { createConnection } from "typeorm";
import { Graduate } from "./entity/Graduate";

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.log(error));
