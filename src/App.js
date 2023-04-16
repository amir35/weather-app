import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WeatherApp from './weather/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
