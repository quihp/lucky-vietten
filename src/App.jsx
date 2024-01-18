import { useEffect, useState } from "react";
import "./App.css";
import Section2 from "./pages/Section2";
import { list } from "./data/list";
import Prizes from "./components/Prizes";
import Winner from "./pages/Winner";
localStorage.setItem("list", JSON.stringify(list));

function App() {
  const [prizeType, setPrizeType] = useState(4);
  const [list, setList] = useState([])
  const handleDone = () => {
    setList(JSON.parse(localStorage.getItem(prizeType)))
  }
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem(prizeType)))
  }, [prizeType])
  
  return (
    <div>
      <div className="flex">
        {/* Section list quizes*/}
        <div className="w-3/12">
          <Prizes changePrizeType={(prizeType) => setPrizeType(prizeType)} />
        </div>
        {/* Section spin*/}
        <div className="w-6/12">
          {/* 0: ĐB 1: 1st ; 2: 2nd; 3: 3rd. 4: KK */}
          <Section2 prizeType={prizeType} handleDone={handleDone} />
        </div>
        {/* Section winners*/}
        <div className="w-3/12">
          <div className="mx-8 ">
            <div className="bg-white px-3">
              <div>Section winners</div>
              <Winner prizeType={prizeType} list= {list}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
