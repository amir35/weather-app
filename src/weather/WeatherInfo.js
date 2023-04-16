import moment from 'moment';
import { Button, Container } from 'reactstrap';

function WeatherInfo({ weatherData, cityName }) {



    return (
        <>
            <div className="weather-info text-center card bg-light">
                <div>
                    <h3>{cityName}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* <i className="bi bi-cloud-haze text-center display-2 text-warning"></i> */}
                <img src={require('./../images/icon.png')} height="100px" width="100px" alt="loading"
                />
                </div>
                {
                    typeof weatherData.main == "undefined" ? (
                        <p>No data found</p>
                    ) : (
                        <>
                            <h3 style={ {marginTop: '10px'}}>{weatherData.main.temp}<sup>o</sup> C</h3>
                            <hr />
                            <div className="row">
                                <div className="col-sm-4">{weatherData.main.temp_max}<sup>o</sup> Cel<br /><b>Max Temp</b></div>
                                <div className="col-sm-4">{weatherData.main.temp_min}<sup>o</sup> Cel<br /><b>Min Temp</b></div>
                                <div className="col-sm-4">{weatherData.main.humidity}%<br /><b>Humidity</b></div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-6">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}<br /><b>Sunrise:</b></div>
                                <div className="col-sm-6">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}<br /><b>Sunset:</b></div>
                            </div>
                            <br />
                            <div className="row" style={ {marginBottom: '10px'}}> 
                            <div className="col-sm-6"><b>Day:</b> {moment().format('dddd')}</div>
                            <div className="col-sm-6"><b>Date:</b> {moment().format('LL')}</div>
                            </div>
                        </>
                    )
                }

            </div>

        </>
    );
}

export default WeatherInfo;