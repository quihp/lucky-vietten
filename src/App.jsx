import "./App.css";
import RandomRoller from "./components/RandomRoller";
import CustomDialog from "./components/CustomDialog";
import Prizes from "./components/Prizes";
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
  ]);

  const handleValue = (val) => {
    setIsOpen(true);
    setList(list.filter((e) => e !== val));
    setValue(val);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
import Section2 from "./pages/Section2";
import { list } from "./data/list";
localStorage.setItem("list", JSON.stringify(list));

function App() {
  return (
    <div>
      <div className="flex">
        {/* Section list quizes*/}
        <div className="w-3/12">
          <Prizes />
        </div>
        {/* Section spin*/}
        <div className="w-6/12">
          <RandomRoller
            message="Click to Pick"
            duration="2000"
            fps="60"
            auto="false"
            list={list}
            handleValue={(val) => handleValue(val)}
          />
          <Section2 />
        </div>
        {/* Section winners*/}
        <div className="w-3/12">Section winners</div>
      </div>
    </div>
  );
}

export default App;
