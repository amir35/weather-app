function ForecastInfo({ forecastData, cityName }) {

    const getNextThreeDays = (day) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const todayIndex = today.getDay(); // get index of today's day (0 for Sunday, 1 for Monday, etc.)
        const nextDays = [];

        for (let i = 0; i <= 4; i++) {
            const nextDayIndex = (todayIndex + i) % 7; // calculate index of next day, wrapping around to Sunday if necessary
            const nextDayName = daysOfWeek[nextDayIndex];
            nextDays.push(nextDayName);
        }

        return nextDays[day];
    }

    return (
        <>
            <div className="weather-info text-center card bg-light">
                {
                    typeof forecastData.city == "undefined" ? (
                        <p>No data found</p>
                    ) : (
                        <>
                            <div className="row" style={ {marginTop: '40px'}}>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">{getNextThreeDays(0)}</div>
                                <div className="col-sm-2">{forecastData.list[0].main.temp}<br />{new Date(forecastData.list[1].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[0].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[1].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[2].main.temp}<br />{new Date(forecastData.list[3].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[2].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[3].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[4].main.temp}<br />{new Date(forecastData.list[5].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[4].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[5].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[6].main.temp}<br />{new Date(forecastData.list[7].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[6].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[7].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-1"></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">{getNextThreeDays(1)}</div>
                                <div className="col-sm-2">{forecastData.list[8].main.temp}<br />{new Date(forecastData.list[9].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[8].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[9].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[10].main.temp}<br />{new Date(forecastData.list[11].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[10].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[11].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[12].main.temp}<br />{new Date(forecastData.list[12].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[12].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[13].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[14].main.temp}<br />{new Date(forecastData.list[15].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[14].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[15].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-1"></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">{getNextThreeDays(2)}</div>
                                <div className="col-sm-2">{forecastData.list[16].main.temp}<br />{new Date(forecastData.list[17].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[16].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[17].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[18].main.temp}<br />{new Date(forecastData.list[19].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[18].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[19].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[20].main.temp}<br />{new Date(forecastData.list[21].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[20].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[21].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[22].main.temp}<br />{new Date(forecastData.list[23].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[22].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[23].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-1"></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">{getNextThreeDays(3)}</div>
                                <div className="col-sm-2">{forecastData.list[24].main.temp}<br />{new Date(forecastData.list[25].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[24].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[25].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[26].main.temp}<br />{new Date(forecastData.list[27].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[26].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[27].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[28].main.temp}<br />{new Date(forecastData.list[29].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[28].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[29].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[30].main.temp}<br />{new Date(forecastData.list[31].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[30].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[31].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-1"></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">{getNextThreeDays(4)}</div>
                                <div className="col-sm-2">{forecastData.list[32].main.temp}<br />{new Date(forecastData.list[32].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[32].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[33].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[34].main.temp}<br />{new Date(forecastData.list[34].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[34].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[35].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[36].main.temp}<br />{new Date(forecastData.list[36].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[36].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[37].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-2">{forecastData.list[38].main.temp}<br />{new Date(forecastData.list[38].dt * 1000).toLocaleTimeString('en-IN')}<br /><b>{forecastData.list[38].weather[0].description}</b>
                                <br /><img src={`http://openweathermap.org/img/w/${forecastData.list[39].weather[0].icon}.png`} height="70px" alt="loading"/></div>
                                <div className="col-sm-1"></div>
                            </div>
                        </>
                    )
                }

            </div>
        </>

    );
}

export default ForecastInfo;