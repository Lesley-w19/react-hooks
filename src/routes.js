import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const AllRoutes = () => {
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="home" index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>;
};

export default AllRoutes;
