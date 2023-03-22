import React from "react";
import { Routes, Route } from "react-router-dom";
import WildLifeApp from "../WildLifeApp";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<WildLifeApp />} />
    </Routes>
  );
};

export default Routes;
