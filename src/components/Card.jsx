export function Card({ data }) {
  const { coord, wind, weather, main } = data;
  const [climate] = weather;
  const { humidity, temp, temp_max, temp_min } = main;
  return (
    <div>
      <p>
        Latitude: {coord.lat} - Longitude: {coord.lon}
      </p>
      <p>Wind:</p>
      <p>
        Velocity: {wind.speed} - Degrees: {wind.deg} - Gust: {wind.gust}
      </p>
      <h2>Weather Description</h2>
      <h2>
        Status: {climate.main} - Description: {climate.description}
        <img
          src={`${import.meta.env.VITE_ICONS_URL}/${climate.icon}.png`}
          alt="climate icon"
        />
      </h2>
      General
      <p>
        Humidity: {humidity} - Temperature: {temp}: max {temp_max} | min{" "}
        {temp_min}
      </p>
    </div>
  );
}
