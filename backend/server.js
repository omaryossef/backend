import express from "express";
import cors from "cors";
import "dotenv/config";
import { getAllCars } from "./controllers/carsController.js";
const PORT = process.env.PORT;
console.log(PORT);
const app = express();
app.use(express.json());
app.use(cors());

app.use("/cars", getAllCars);
const server = app.listen(PORT, () => {
  console.log(`server läuft auf: http://localhost:${PORT} `);
});
