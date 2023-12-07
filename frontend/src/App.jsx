import { useEffect, useState } from "react";
import backendUrl from "../config/config.js";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    console.log("URL, die für fetch verwendet wird", backendUrl);
    // try catch wäre gut ;)
    const fetchCars = async () => {
      const response = await fetch(`${backendUrl}/cars`);

      const data = await response.json();

      setCars(data);
    };
    fetchCars();
  }, []);
  console.log(cars);
  return (
    <>
      <h1>Tolle Autos</h1>
      <ul>
        {cars.map((car) => {
          return (
            <li key={car.id}>
              {car.name}
              ----- made: {car.year}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
