import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { getWeatherData } from "./services/getWeatherData";
import { Card } from "./components/Card";
import { useState } from "react";

const INPUT_NAME = "city-name";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getAndSetWeatherData = async (...params) => {
    const weatherData = await getWeatherData(...params);
    setWeatherData(weatherData);
  };

  const getWeatherDataByForm = e => {
    e.preventDefault();
    const inputValue = e.target[INPUT_NAME].value.trim();
    if (!inputValue) return;
    getAndSetWeatherData(inputValue);
    e.target[INPUT_NAME].value = "";
  };

  const getWeatherDataByCoords = () => {
    const handleSuccess = async locationData => {
      const { latitude, longitude } = locationData.coords;

      getAndSetWeatherData(latitude, longitude);
    };

    const handleError = error => {
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  return (
    <>
      <h1>The weather in your city</h1>

      <h2>Enter yout city</h2>
      <SearchForm handleSubmit={getWeatherDataByForm} inputName={INPUT_NAME} />

      <p>or...</p>

      <button onClick={getWeatherDataByCoords}>
        Get your current position
      </button>
      {weatherData && <Card data={weatherData} />}
    </>
  );
}
export default App;
