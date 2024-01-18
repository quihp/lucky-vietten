import { useState } from "react";
import RandomRoller from "./../../components/RandomRoller";
import CustomDialog from "./../../components/CustomDialog";
function renderNamePrize (prizeType) {
  switch(prizeType) {
    case 0: return "Giải đặc biệt"
    case 1: return "Giải nhất"
    case 2: return "Giải nhì"
    case 3: return "Giải ba"
    default:
    case 4: return "Giải khuyến khích"
  }
}
function Section2(props) {
  const { prizeType, handleDone } = props 
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
    handleDone()
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
        {renderNamePrize(prizeType)}
      </div>

      <CustomDialog isOpen={isOpen} value={value} handleClose={handleClose} />
    </>
  );
}

export default Section2;
