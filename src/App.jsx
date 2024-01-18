import { useState } from "react";

import "./App.css";
import RandomRoller from "./components/RandomRoller";
import CustomDialog from "./components/CustomDialog";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleValue = (val) => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <RandomRoller
        message="Click to Pick"
        duration="2000"
        fps="60"
        auto="false"
        list={[
          "459324",
          "466879",
          "461496",
          "458909",
          "467742",
          "465582",
          "464690",
          "458938",
          "462568",
          "466632",
          "463829",
          "459342",
          "466034",
          "460664",
          "466358",
          "461123",
          "465344",
          "462846",
          "464895",
          "463183",
          "464774",
          "459900",
          "458734",
          "460402",
        ]}
        handleValue={(val) => handleValue(val)}
      />
      <CustomDialog isOpen={isOpen} handleClose={handleClose}/>
    </>
  );
}

export default App;
