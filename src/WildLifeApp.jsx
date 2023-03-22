import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import WildLife from "./pages/WildLife";

const WildLifeApp = () => {
  return (
    <div className="w-full">
      <Header />
      <hr className="m-8" />
      <WildLife />
    </div>
  );
};

export default WildLifeApp;
