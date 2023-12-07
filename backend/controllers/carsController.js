// import { JSONPreset } from "lowdb/node";
// import "dotenv/config";
// const defualtCarsData = { cars: [] };
// const db = await JSONPreset("db.json", defualtCarsData);
// console.log(db.data);
const cars = [
  {
    id: 1,
    name: "Ford",
    year: 2020,
  },
  {
    id: 2,
    name: "BMV",
    year: 2022,
  },
  {
    id: 3,
    name: "KIA",
    year: 2021,
  },
];
export const getAllCars = async (req, res) => {
  try {
    // if (process.env.NODE_ENV === "production") {
    // await db.read();
    // const allCars = db.data.cars;
    const extandetCar = cars.map((car) => {
      return { ...car, added: new Date().toLocaleString("de") };
    });
    res.status(200).json(extandetCar);
  } catch (error) {
    res.status(500).send(error);
  }
};
