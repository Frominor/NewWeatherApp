import { IWeather } from "../types/IWeather";
import clouds from "../imgs/clouds 1.png";
import sneg from "../imgs/rain 1.png";
import drizzle from "../imgs/drizzle 1.png";
import clear from "../imgs/clear 2.png";
import mist from "../imgs/mist 1.png";
export const FilteredWeather = (Weather: IWeather[]) => {
  for (let k of Weather) {
    switch (k.weather[0].description) {
      case "light rain":
        k.weather[0].icon = drizzle;
        break;
      case "overcast clouds":
        k.weather[0].icon = clouds;
        break;
      case "light snow":
        k.weather[0].icon = mist;
        break;
      case "broken clouds":
        k.weather[0].icon = mist;
        break;
      case "few clouds":
        k.weather[0].icon = drizzle;
        break;
      case "scattered clouds":
        k.weather[0].icon = clouds;
        break;
      case "snow":
        k.weather[0].icon = sneg;
        break;
      case "clear sky":
        k.weather[0].icon = clear;
        break;
      default:
        break;
    }
  }
  return Weather;
};
