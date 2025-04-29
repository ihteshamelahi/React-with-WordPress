import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NewTest from "./Test.jsx";
import Hooks from "./Hooks.jsx";
import "./index.css";
import Card from "./components/Card.jsx";
import BgProject from "./components/BgProject.jsx";
import NewBg from "./components/NewBg.jsx";
import PasswordProject from "./components/PasswordProject.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
