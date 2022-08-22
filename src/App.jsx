import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { getWeatherData } from "./services/getWeatherData";
import { Card } from "./components/Card";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getUserPosition = () => {
    const handleSuccess = async locationData => {
      const { latitude, longitude } = locationData.coords;

      const weatherData = await getWeatherData(latitude, longitude);

      setWeatherData(weatherData);
      console.log(weatherData);
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
      <SearchForm />

      <p>or...</p>

      <button onClick={getUserPosition}>Get your current position</button>
      {weatherData && <Card data={weatherData} />}
    </>
  );
}
export default App;
