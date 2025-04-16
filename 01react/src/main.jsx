import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NewTest from "./Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <NewTest name="Ihtesham Elahi" />
  </StrictMode>
);
