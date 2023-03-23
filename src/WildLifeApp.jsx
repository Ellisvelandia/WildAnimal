import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RoutesWildLife from "./routes/RoutesWildLife";

const WildLifeApp = () => {
  return (
    <div className="w-full">
      <Header />
      <hr className="mb-8" />
      <RoutesWildLife />
      <hr className="mb-8" />
      <Footer />
    </div>
  );
};

export default WildLifeApp;
