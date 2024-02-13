import { IWeather, State } from "../types/IWeather";
export const FilterWeatherForData = (list: IWeather[], state: State) => {
  let boolean = false;
  state.FiveDForecast = [];
  state.Lat = null;
  state.Lon = null;
  let arr = [];
  for (let i = 0; i < 8; i++) {
    if (+list[i].dt_txt.split(" ")[1].split(":")[0] == 0) {
      arr.push(list[i]);
    }
    if (+list[i].dt_txt.split(" ")[1].split(":")[0] >= 12) {
      arr.push(list[i]);
    }
    if (i == 5) {
      state.weather = list[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i].dt_txt.split(" ")[1] > arr[k].dt_txt.split(" ")[1]) {
        let index: any = arr[k];
        arr[k] = arr[i];
        arr[i] = index;
      }
    }
  }
  let zero = arr[0];
  arr.splice(0, 1);
  arr.push(zero);
  state.HourlyWeather = arr;
  for (let k of list) {
    for (let z of state.FiveDForecast) {
      if (k.dt_txt.split(" ")[0] == z.dt_txt.split(" ")[0]) {
        boolean = true;
      }
    }
    if (!boolean) {
      if (k.dt_txt.split(" ")[1] == "15:00:00") {
        state.FiveDForecast.push(k);
      }
    }
    boolean = false;
  }
  state.Error = null;
  state.isLoading = false;
  return arr;
};
