import React from "react";

import CustomInput from "../FindInput/CustomInput";
import Button from "../button/Button";

import { useAppSelector } from "../../hooks/typedhooks";
import { FindLocationProps } from "../../types/IFindLocationProps";

const FindLocation: React.FC<FindLocationProps> = ({
  City,
  SetCity,
  SetIsFetchingDatas,
  isFectingDadatas,
  makeRequest,
  dispatch,
  GetWeather,
  FindCityCoords,
  Dadat,
  SetDadat,
}) => {
  const State = useAppSelector((State) => State.Weather);
  return (
    <div className="FindLocation">
      <CustomInput
        City={City}
        SetCity={SetCity}
        SetIsFetchingDatas={SetIsFetchingDatas}
        isFectingDadatas={isFectingDadatas}
        makeRequest={makeRequest}
      ></CustomInput>
      <Button
        OnClick={() => {
          if (City.length !== 0) {
            dispatch(GetWeather({ State, isCurrent: false }));
            SetCity("");
          }
        }}
        clasS="Find"
        title="Find"
      ></Button>

      <ul className="dadatArr">
        {Dadat.map((item) => {
          return (
            <li
              onClick={() => {
                let arr = item.value.split(" ");
                let city = arr[arr.indexOf("г") + 1].trim();
                SetCity(city);
                dispatch(FindCityCoords(city));
                SetIsFetchingDatas(false);
                SetDadat([]);
              }}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FindLocation;
