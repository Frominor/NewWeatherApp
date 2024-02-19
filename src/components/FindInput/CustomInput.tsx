import React from "react";

import { InputProps } from "../../types/InputProps";

import "./CustomInput.css";

const CustomInput: React.FC<InputProps> = ({
  City,
  SetCity,
  SetIsFetchingDatas,
  isFectingDadatas,
  makeRequest,
}) => {
  return (
    <>
      <input
        value={City}
        placeholder="Search for your preffered city..."
        onChange={(e) => {
          if (isFectingDadatas == false) {
            SetIsFetchingDatas(!isFectingDadatas);
          }
          SetCity(e.target.value);
          if (e.target.value.length > 0) {
            return makeRequest(e);
          }
        }}
      ></input>
    </>
  );
};
export default CustomInput;
