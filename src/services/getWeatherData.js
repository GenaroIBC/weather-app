export const getWeatherData = async (latitude = null, longitude = null) => {
  let url = `${import.meta.env.VITE_BASE_URL}/weather?&units=metric`;

  // make request by coords
  if (latitude && longitude) url += `&lat=${latitude}&lon=${longitude}`;
  // make request by city name
  else url += `&q=${latitude}`;

  const response = await fetch(`${url}&appid=${import.meta.env.VITE_API_KEY}`);
  const data = await response.json();

  return data;
};
