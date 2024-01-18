import { useState } from "react";
import RandomRoller from "./../../components/RandomRoller";
import CustomDialog from "./../../components/CustomDialog";

function Section2() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({});
  const prizeType = 1; // 0: ĐB 1: 1st ; 2: 2nd; 3: 3rd. 4: KK
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));

  const handleValue = (val,prizeType) => {
    setIsOpen(true);
    setList(list.filter((e) => e.id !== val.id));
    setValue(list.find((e) => e.id === val));
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="p-10 bg-white">
        <RandomRoller
          message="Click to Pick"
          duration="2000"
          fps="60"
          auto="false"
          list={list.map(e => e.id)}
          handleValue={(val) => handleValue(val, prizeType)}
        />
      </div>

      <CustomDialog isOpen={isOpen} value={value} handleClose={handleClose} />
    </>
  );
}

export default Section2;
