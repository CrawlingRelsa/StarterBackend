import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";

//routes
import testRoute from "./route/sample";

function main() {
  dotenv.config({ path: path.join(process.cwd(), "env", ".env") }); //you can choose the env file here
  let app = express();
  //setup express
  app.use(morgan("[:date[web]] :method :url :status"));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(cors()); //to avoid CORS problems
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  //---routes
  app.use("/test", testRoute);
  app.listen(process.env.PORT, () => {
    console.log("server ready at", process.env.PORT);
  });
}
main();
