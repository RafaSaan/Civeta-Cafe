import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import HomeCont from "../Components/Home/HomeCont";
import HomeBtn from "../Components/Home/HomeBtn";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <header className="header">
          <Navbar />
        </header>
        <main className="home__main">
          <HomeCont />
          <HomeBtn />
        </main>
      </div>
    </div>
  );
};

export default Home;
