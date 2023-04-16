import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";
import axios from 'axios';
import { REACT_APP_API_KEY, REACT_APP_API_URL, REACT_APP_FORECAST, TEMP_IN_CELSIUS } from "./constants";
import { InputGroup, InputGroupText, Input } from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion';

function WeatherApp() {

    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [forecastData, setForecastData] = useState({});

    //const API_KEY = REACT_APP_API_KEY;

    //const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_API_KEY}&units=metric`;

    const APIurl = `${REACT_APP_API_URL}?q=${cityName}&appid=${REACT_APP_API_KEY}&units=${TEMP_IN_CELSIUS}`;
    const ForecastURL = `${REACT_APP_FORECAST}?q=${cityName}&appid=${REACT_APP_API_KEY}&units=${TEMP_IN_CELSIUS}`;

    //Making All characters in Capital letter
    // const changeCityInput = (event) => {
    //     const inputValue = event.target.value;
    //     if (inputValue) {
    //         const uppercaseValue = inputValue.toUpperCase();
    //         setCityName(uppercaseValue);
    //         event.target.value = uppercaseValue;
    //     } else {
    //         setCityName('');
    //     }
    // }

    //Making only first characters in Capital letter
    const changeCityInput = (event) => {
        const newValue = event.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
        setCityName(newValue);
    };

    const fetchWeatherAPI = async (event) => {
        if (event.key === 'Enter') {
            axios.get(APIurl).then(
                (response) => {
                    console.log(response.data);
                    setWeatherData(response.data);
                }
            ).catch(error => {
                let showError = true;
                console.log(showError);
                //setLoading(false);
            });
        }
    }

    const handleForecastUrl = async (event) => {
        //alert("Forecast is available");
        axios.get(ForecastURL).then(
            (response) => {
                console.log(response.data);
                setForecastData(response.data);
            }
        ).catch(error => {
            let showError = true;
            console.log(showError);
            //setLoading(false);
        });
    }

    let handleMouseOut = (e) => {
        fetchWeatherAPI();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h3 className="text-center text-success"> React Weather App</h3>
                        <div className="buttonIn form-group">
                            <InputGroup>
                                <Input type="text" className="form-control" placeholder="Enter City Name"
                                    onChange={changeCityInput} onMouseOut={handleMouseOut}
                                    onKeyPress={fetchWeatherAPI} value={cityName} />

                                <InputGroupText>
                                    <i class="bi bi-arrow-clockwise" onClick={(event) => {
                                        setCityName("")
                                        setWeatherData("")
                                        setForecastData("")
                                    }}></i>
                                </InputGroupText>
                            </InputGroup>
                        </div>
                        {/* Weather app info*/}
                        <WeatherInfo cityName={cityName} weatherData={weatherData} />
                        {/* Weather app info*/}
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <Accordion defaultActiveKey="1" onClick={handleForecastUrl}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>5-day Forecast</Accordion.Header>
                                <Accordion.Body className="dayData">
                                    <ForecastInfo cityName={cityName} forecastData={forecastData} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </>

    );
}
export default WeatherApp;
