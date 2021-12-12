import './App.css';
import React,{useState} from 'react';
import Home from './component/Home'
import WeatherResult from './component/WeatherResult'
import axios from 'axios'
import { SettingsSystemDaydreamRounded } from '@material-ui/icons';



function App(){
  const [input, setInput ] = useState("");
  const [temp, setTemp ] = useState("");
  const [name, setName ] = useState("");
  const [description, setDescription ] = useState("");
  const [icon, setIcon] = useState("");
  const [lat, setLat ] = useState("");
  const [timezone , setTimezone ] = useState("");
  const [lon, setLon ] = useState("");

  const findWeather = async()=>{
    const apikey="f22f142fcfd12a065b4555ae276fe552";
  const unit ="metric"
  const url="https://api.openweathermap.org/data/2.5/weather?q=" +input+ "&appid="+ apikey+"&units"+unit;
  const response = await axios.get(url);
  
  const temp = await response.data.main.temp;
  const name = await response.data.name;
  const timezone  = await response.data.timezone ;
  const weatherDescription = response.data.weather[0].description;
  const icon = await response.data.weather[0].icon;
  const imageURL="http://openweathermap.org/img/wn/10d@2x.png";

  const lat = await response.data.coord.lat;
  const lon = await response.data.coord.lon;


  setTemp(temp);
  setName(name);
  setDescription(weatherDescription);
  setIcon(imageURL);
  setInput("");
  setLat(lat);
  setLon(lon);
  setTimezone(timezone );
  setIcon(icon);
  };


return(
  <div className="App">
    {temp === "" ?(
      <Home input={input} setInput={setInput} findWeather={findWeather} />
    ) :
      (
        <WeatherResult temp={temp} 
        name={name}
        timezone ={timezone }
        desc={description}
        icon={icon}
        setTemp={setTemp}
        lat={lat}
        lon={lon} />
      
    )}
  </div>
);
      }


export default App;
