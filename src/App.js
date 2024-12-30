import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route />
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
    </Routes>
  );
}
