let backendUrl;

console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  // Benutze diese URL, um mit dem Backend zu kommunizieren,
  // wenn wir auf render, also in "production", sind
  backendUrl = "https://backend-cars-deployment.onrender.com";
} else {
  // Benutze diese URL, um mit dem Backend zu kommunizieren,
  // wenn wir am Projekt arbeiten, also in "development" sind
  backendUrl = "http://localhost:3004";
}

export default backendUrl;
