import "reflect-metadata"
import { createConnection } from "typeorm"
import { Request, Response } from "express"
import * as express from "express"
import * as bodyParser from "body-parser"
import { AppRoutes } from "./routes"
const cors = require("cors")

const corsMiddleWare = cors()
// const PORT = process.env.PORT || 4000

console.log("from index.ts:")

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    console.log("Hey from typeORM")
    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(corsMiddleWare)
    // register all application routes
    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => response.status(400).send({ message: err.message }))
        }
      )
    })

    // run app
    app.listen(4000)

    console.log("Express application is up and running on port 4000")
  })
  .catch((error) => console.log("TypeORM connection error: ", error))
