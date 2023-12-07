import { useState } from "react";
import backendUrl from "/home/dci-student/Desktop/javaScript_training/backend/backend/frontend/config/config.js";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function FormCars() {
  const [dataAdded, setDataAdded] = useState(false);
  const [Data, setFormData] = useState({
    id: "",
    name: "",
    year: "",
  });
  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...Data, [name]: value });
    console.log(Data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });
      console.log("response.ok", response.ok);
      if (response.ok) {
        const data = await response.text();
        console.log("data", data);
        setDataAdded(true);
      } else {
        throw new Error("response not ok ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>id:</Form.Label>
        <Form.Control
          type="text"
          placeholder="id"
          name="id"
          value={Data.id}
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={Data.name}
          onChange={handelChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>year:</Form.Label>
        <Form.Control
          type="text"
          placeholder="year"
          name="year"
          value={Data.year}
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {dataAdded && <p style={{ color: "red" }}> erfolgeich </p>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCars;
