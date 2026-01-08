import React from "react";
import Heroimage1 from "../assets/Heroimage1.png";
import Heroimage2 from "../assets/Heroimage2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="h-screen relative bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${Heroimage1})` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 gap-4">
        {/* IMAGE */}
        <img
          src={Heroimage1}
          alt="Chef Kitchen"
          className="w-[350px] rounded-xl bg-black/25 shadow-2xl border-l-4 border-b-4 border-gray-600/60"
        />

        <img
          src={Heroimage2}
          alt=""
          className="w-[150px] absolute backdrop-blur-md bg-black/20 rounded-full mb-60 sm:mb-60 md:mb-44"
        />

        <div className="">
          {/* TITLE */}
          <h1 className="md:max-w-sm text-[#EFEFF1] text-3xl font-bold cursor-default">
            Welcome to Chef Kitchen
          </h1>

          {/* DESCRIPTION */}
          <p className="md:max-w-sm text-gray-300 text-center md:text-center cursor-default transition-all duration-1000">
            Check out the awesome food experience! It's super fresh, quick, and
            oh-so tasty!
          </p>
        </div>

        {/* BUTTON */}
        <Link to="/menu">
          <button className="flex justify-center items-center bg-[#F99147] hover:bg-[#fc6a02] text-[#EFEFF1] text-base sm:text-lg md:text-xl px-32 sm:px-20 md:px-32 py-1 rounded-lg transition-all duration-300 ease-in-out pb-2">
            Explore Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
