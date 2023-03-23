import React from "react";
import Animals from "../components/home/Animals";
import Article from "../components/home/Article";
import Top from "../components/home/Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Article />
      <Animals />
    </div>
  );
};

export default Home;
