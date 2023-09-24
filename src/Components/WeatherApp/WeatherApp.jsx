import React from 'react'
import './WeatherApp.css'

import weather_image from '../Assets/weather.png';
import search_icon from '../Assets/search-interface-symbol.png'
import humidity_icon from '../Assets/humidity.png'
import wind_speed_icon from '../Assets/wind.png'

const WeatherApp = () => {

  let api_key = "7ed29e72b0b2d5ccf8b7ba87da22bcdf";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    let data = await response.json();

    /*Tạo biến lưu trữ */
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    /*Cập nhật dữ liệu từ api */
    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" style={{width:20, height:20,}}/>
            </div>
        </div>
        <div className="weather-image">
          <img src={weather_image} alt="" style={{width:200, height:200,}}/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Biên Hòa</div>
        <div className="data-container">
          {/* Độ ẩm */}
          <div className="element">
            <img src={humidity_icon} alt="" className='icon' style={{width:40, height:40,}}/>
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          {/* Tốc độ gió */}
          <div className="element">
            <img src={wind_speed_icon} alt='' className='icon' style={{width:40, height:40,}}/>
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp