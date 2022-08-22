export const getWeatherData = async (latitude, longitude) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const data = await response.json();

  return data;
};
