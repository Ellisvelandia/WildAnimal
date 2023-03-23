import React from "react";
import { Routes, Route } from "react-router-dom";
import Contribute from "../pages/Contribute";
import WildLife from "../pages/WildLife";

const RoutesWildLife = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WildLife />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </>
  );
};

export default RoutesWildLife;
