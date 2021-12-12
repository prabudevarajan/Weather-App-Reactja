import { Button } from '@material-ui/core';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import "./style.css";
import compass from '../images/compass.png';
import thermometer from '../images/thermometer.png';
import productdescription from '../images/productdescription.png';
import city from '../images/city.png';





const WeatherResult =({ temp, icon, desc, setTemp, lat, lon,name,timezone})=>{
    return(
        <div className="homeBox">
            <Card className="card">
                <CardContent>
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><img src={city} alt="thermometer" className="imgcode"/> </td>
                            <td>City :</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td><img src={city} alt="thermometer" className="imgcode"/> </td>
                            <td>Timezone :</td>
                            <td>{timezone}</td>
                        </tr>
                        <tr>
                            <td><img src={thermometer} alt="thermometer" className="imgcode"/> </td>
                            <td>Temp :</td>
                            <td>{temp} °C</td>
                        </tr>
                        <tr>
                            <td><img src={compass} alt="compass" className="imgcode"/> </td>
                            <td>Latitude :</td>
                            <td>{lat}</td>
                        </tr>
                        <tr>
                           <td><img src={compass} alt="compass" className="imgcode"/> </td>
                            <td>Longitude :</td>
                            <td>{lon}</td>
                        </tr>
                        <tr>
                        <td><img src={productdescription} alt="productdescription" className="imgcode"/> </td>
                            <td>description :</td>
                            <td>{desc}</td>
                        </tr>
                        
                    </table>



<Button variant="contained" color="default"
onClick={()=>{
    setTemp("");
}}
>
    Back
</Button>
                </CardContent>
            </Card>
        </div>
    )
}


export default WeatherResult;