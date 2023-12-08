import { useEffect, useState } from "react";
import backendUrl from "../../config/config";

function Home() {
  const [cars, setCars] = useState([]);

  const handelDeleteClick = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/cars/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("car was deleted");
      } else {
        const data = await response.text();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  handelDeleteClick(() => {
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
              ----- made: {car.year}
              <button onClick={() => handelDeleteClick(car.id)} key={car.id}>
                del
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
