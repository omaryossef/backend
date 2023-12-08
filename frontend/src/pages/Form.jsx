import { useState } from "react";
import backendUrl from "../../config/config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function FormCars() {
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    year: "",
  });
  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
    // console.log(newData);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    try {
      const response = await fetch(`${backendUrl}/cars`, option);
      if (response.ok) {
        const data = await response.text();
        console.log(data);
      } else {
        throw new Error("es gap ein Fehler");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      onSubmit={handelSubmit}
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
          value={newData.id}
          onChange={handleChange}
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
          value={newData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>year:</Form.Label>
        <Form.Control
          type="text"
          placeholder="year"
          name="year"
          value={newData.year}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {/* {dataAdded && <p style={{ color: "red" }}> erfolgeich </p>} */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCars;
