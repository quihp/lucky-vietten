/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomDialog from "../CustomDialog";

const CustomButton = (props) => {
  const { id, name } = props;
  const [state, setState] = useState({
    open: false,
    value: undefined,
  });
  const handleOnClick = () => {
    setState({
      open: true,
      value: getValue(),
    });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const getValue = () => {
    return (
      <div className="text-center">
        <h1>{name}</h1>
        <span className="text-[30px] text-red-500">
          Rolls Royce Phantom Chạy Ùn Ụt
        </span>
        <img src="/src/assets/rollsroyce.png" alt="" />
      </div>
    );
  };

  return (
    <>
      <button
        key={id}
        className="bg-white text-red-500 my-4 w-[300px] h-[50px] transition hover:scale-125 ease-in-out duration-300"
        onClick={handleOnClick}
      >
        {name}
      </button>
      <CustomDialog
        isOpen={state.open}
        value={state.value}
        handleClose={handleClose}
      />
    </>
  );
};

export default CustomButton;
