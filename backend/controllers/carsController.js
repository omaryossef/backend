import { JSONPreset } from "lowdb/node";
import "dotenv/config";
const defualtCarsData = { cars: [] };
const db = await JSONPreset("db.json", defualtCarsData);
console.log(db.data);

export const getAllCars = async (req, res) => {
  try {
    if ((process.env.NODE_ENV = "development")) {
      await db.read();
      const allCars = db.data.cars;
      const extandetCar = allCars.map((car) => {
        return { ...car, added: new Date().toLocaleString("de") };
      });
      res.status(200).json(extandetCar);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
