import { useState } from "react";
import RandomRoller from "./../../components/RandomRoller";
import CustomDialog from "./../../components/CustomDialog";

function Section2(props) {
  const { prizeType } = props 
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({});
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));

  const handleValue = (val,prizeType) => {
    setIsOpen(true);
    setList(list.filter((e) => e.id !== val.id));
    const objWinner = list.find((e) => e.id === val)
    setValue(objWinner);
    let prevList = JSON.parse(localStorage.getItem(prizeType)) || [];
    prevList.push(objWinner)
    localStorage.setItem(prizeType, JSON.stringify(prevList))
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
