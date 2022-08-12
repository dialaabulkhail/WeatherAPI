import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

const Index = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  
  const handleSearach = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bef28bda6117928f24255ad0672bf1bd
  `
      )
      .then((response) => {
        setWeatherData(response.data);
        setCity("");
      })
      .catch((error) => {
        console.log(error);
        alert("Please enter a valid city name..");
      });
  };

  return (
    <div>

      
      <div className="top-0 bottom-0 left-0 right-0 aboslute" />
      <Image
        layout="fill"
        src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1"
        className="object-cover"
      />



      <div className="relative items-center ">
        <form onSubmit={handleSearach}>
          <div className="max-w-[400px]  w-full justify-between flex m-1">
            <input
              className="w-full p-3 text-gray-400 border bg-white/50 border-white/60 focus:outline-none rounded-2xl "
              placeholder="Search city"
              onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={handleSearach} className="ml-3 text-white">
              <BsSearch size={20} />
            </button>
          </div>
        </form>
      </div>


    

      <div>{weatherData.main && <Weather data={weatherData} />}</div>
    </div>
  );
};

export default Index;
