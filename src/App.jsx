import { useState, Fragment } from "react";

import "./App.css";
import RandomRoller from "./components/RandomRoller";
import CustomDialog from "./components/CustomDialog";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState([
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
  ])

  const handleValue = (val) => {
    setIsOpen(true);
    setList(list.filter(e => e !== val))
    setValue(val);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div >
      <div className="flex">
        {/* Section list quizes*/}
        <div className="w-3/12">Section list quizes</div>
        {/* Section spin*/}
        <div  className="w-6/12">
          <RandomRoller
            message="Click to Pick"
            duration="2000"
            fps="60"
            auto="false"
            list={list}
            handleValue={(val) => handleValue(val)}
          />
        </div>
        {/* Section winners*/}
        <div  className="w-3/12">Section winners</div>
      </div>
      {/* Section Wheel */}

      <CustomDialog isOpen={isOpen} value={value} handleClose={handleClose} />
    </div>
  );
}

export default App;
