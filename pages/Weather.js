import React from "react";
import Image from "next/image";


const Weather = ({ data }) => {

  return (
    <div className="relative">
      <div className="p-5 rounded-md bg-white/20">
        <h1 className="mt-5 text-2xl font-bold text-center text-black/60 animate-pulse">
          {/* {data.name} */}
        </h1>
        <div className="">
          <div className="flex items-center justify-between">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              width={100}
              height={100}
              className="ml-5 rounded-full"
            />
            <h1 className="mx-6 text-4xl font-bold text-black/60">
              {data.main.temp} °C
            </h1>
          </div>
          <div className="relative grid grid-cols-2 grid-rows-2 p-4 mt-4 text-center rounded-xl bg-black/10 text-black/60">
            <div className="p-8 m-1 duration-150 ease-in-out bg-white/60 hover:scale-105 rounded-xl">
              Feels like 
              <span className="font-bold"> {data.main.feels_like}°C </span>
            </div>
            <div className="p-8 m-1 duration-150 ease-in-out bg-white/60 hover:scale-105 rounded-xl">
              {data.weather[0].description}
            </div>
            <div className="p-8 m-1 duration-150 ease-in-out bg-white/60 hover:scale-105 rounded-xl">
              Wind speed <span className="font-bold">{data.wind.speed}m/s</span>
            </div>
            <div className="p-8 m-1 duration-150 ease-in-out bg-white/60 hover:scale-105 rounded-xl">
              Humidity <span className="font-bold">{data.main.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
