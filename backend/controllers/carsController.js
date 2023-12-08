import { JSONPreset } from "lowdb/node";
import "dotenv/config";
const defualtCarsData = { cars: [] };
const db = await JSONPreset("db.json", defualtCarsData);
console.log(db.data);
// const cars = [
//   {
//     id: 1,
//     name: "Ford",
//     year: 2020,
//   },
//   {
//     id: 2,
//     name: "BMV",
//     year: 2022,
//   },
//   {
//     id: 3,
//     name: "KIA",
//     year: 2021,
//   },
// ];
export const getAllCars = async (req, res) => {
  // const id = new Date().toLocaleDateString("de");

  try {
    if (process.env.NODE_ENV === "development") {
      await db.read();
      const allCars = db.data.cars;
      // const id = allCars.length + 1;
      // const extandetCar = allCars.map((car) => {
      //   const newCar
      // });
      res.status(200).json(allCars);
    } else {
      res.status(200).send(db.data.cars);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addNewCar = async (req, res) => {
  console.log("req.body", req.body);
  try {
    await db.read();
    console.log(db);
    const allCars = await db.data.cars;
    const newCar = await req.body;
    if (req.body.id && req.body.name && req.body.year) {
      allCars.push(newCar);
      await db.write();
      res.status(201).send(`new car was added with name :${newCar.name}`);
    } else {
      res.status(400).send("some attribute were missed");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteCar = async (req, res) => {
  try {
    const carId = Number(req.params.id);
    await db.read();
    const allCars = db.data.cars;
    //
    const carIndex = allCars.findIndex((car) => {
      return car.id === carId;
    });
    allCars.splice(carIndex, 1);
    await db.write();
    res.status(200).send("car was deleted");
    // if (carIndex !== -1) {
    //   //
    // } else {
    //   res.status(400).send("car not found");
    // }
  } catch (error) {
    res.status(500).send(error);
  }
};
