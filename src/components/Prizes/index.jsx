import React from "react";
import CustomButton from "./CustomButton";

function Prizes(props) {
  const { changePrizeType } = props
  return (
    <div className="flex flex-col">
      <CustomButton changePrizeType={changePrizeType} id={0} name="Giải đặc biệt" />
      <CustomButton changePrizeType={changePrizeType} id={1} name="Giải nhất" />
      <CustomButton changePrizeType={changePrizeType} id={2} name="Giải nhì" />
      <CustomButton changePrizeType={changePrizeType} id={3} name="Giải ba" />
      <CustomButton changePrizeType={changePrizeType} id={4} name="Giải khuyến khích" />
    </div>
  );
}

export default Prizes;
