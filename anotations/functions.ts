const add = (a: number, b: number): number => {
  return a + b;
};

const logger = (message: string): void => {
  // void mean not returning anything but can return undefined and null
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysweather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  // can also write the destructuring parameters const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysweather);
