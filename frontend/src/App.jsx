import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
