import "./App.css";
import Section2 from "./pages/Section2";
import { list } from "./data/list";
import Prizes from "./components/Prizes";
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
          <Section2 />
        </div>
        {/* Section winners*/}
        <div className="w-3/12">Section winners</div>
      </div>
    </div>
  );
}

export default App;
