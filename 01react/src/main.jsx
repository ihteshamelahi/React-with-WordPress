import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NewTest from "./Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <NewTest name="Ihtesham Elahi" Roll_No="51" />
    <NewTest name="usama Maqsood" Roll_No="52" />
  </StrictMode>
);
