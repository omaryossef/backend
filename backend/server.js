import express from "express";
import cors from "cors";
import "dotenv/config";
import { getAllCars } from "./controllers/carsController.js";
const PORT = process.env.PORT;
console.log(PORT);
const app = express();
app.use(express.json());
app.use(cors());
// if (process.env.NODE_ENV === "development") {
//   app.use(cors());
// } else {
//   // TODO: REnder URL eintragen
//   app.use(cors({ origin: "https://backend-cars-deployment.onrender.com" }));
// }

app.use("/cars", getAllCars);
const server = app.listen(PORT, () => {
  console.log(`server läuft auf: http://localhost:${PORT} `);
});
