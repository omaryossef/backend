import express from "express";
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT;
console.log(PORT);
const app = express();

const server = app.listen(PORT, () => {
  console.log(`server läuft auf: http://localhost:${PORT} `);
});
