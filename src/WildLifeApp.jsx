import React from "react";
import "./App.css";
import Header from "./components/Header";
import WildLife from "./pages/WildLife";

const WildLifeApp = () => {
  return (
    <div>
      <Header />
      <hr className="m-8" />
      <WildLife />
    </div>
  );
};

export default WildLifeApp;
