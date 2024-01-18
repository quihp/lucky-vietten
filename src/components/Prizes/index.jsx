import React from "react";
import CustomButton from "./CustomButton";

function Prizes() {
  return (
    <div className="flex flex-col">
      <CustomButton id="4" name="Giải đặc biệt" />
      <CustomButton id="1" name="Giải nhất" />
      <CustomButton id="2" name="Giải nhì" />
      <CustomButton id="3" name="Giải ba" />
      <CustomButton id="4" name="Giải khuyến khích" />
    </div>
  );
}

export default Prizes;
