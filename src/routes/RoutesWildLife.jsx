import React from "react";
import { Routes, Route } from "react-router-dom";
import Contribute from "../pages/Contribute";
import Home from "../pages/Home";
import WildLife from "../pages/WildLife";

const RoutesWildLife = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/wildlife" element={<WildLife />} />
      </Routes>
    </>
  );
};

export default RoutesWildLife;
