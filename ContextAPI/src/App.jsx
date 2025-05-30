import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
      <ContactInfo />
    </UserContextProvider>
  );
}

export default App;
