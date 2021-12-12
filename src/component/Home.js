import {Button,Input} from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./style.css";


const Home = ({ input, setInput, findWeather}) =>{
    const handleChange =(event) =>{
        setInput(event.target.value);
    };
    const handleClick=(event)=>{
        event.preventDefault();
        findWeather()
    }

    return(
        <div className="homeBox">
            <div className="homeBox_field">
                <Card className="card">
                    <CardContent>
                        <h1>Google Weather App</h1>
                        <form >
                            <Input placeholder ="Enter the City Name"
                            onChange={handleChange}
                            value={input}/>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" type="submit"
                            onClick={handleClick}>
                                Search
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home;