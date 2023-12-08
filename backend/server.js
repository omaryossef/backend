import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  addNewCar,
  deleteCar,
  getAllCars,
} from "./controllers/carsController.js";
const PORT = process.env.PORT;
console.log(PORT);
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(cors());
} else {
  // TODO: REnder URL eintragen
  app.use(cors({ origin: "https://frontend-cars-deployment.onrender.com" }));
}

app.route("/cars").get(getAllCars).post(addNewCar);
// app.post("/cars", addNewCar);
app.delete("/cars/:id", deleteCar);
const server = app.listen(PORT, () => {
  console.log(`server läuft auf: http://localhost:${PORT} `);
});
