import "./App.css";
import Shafts from "./components/Shafts";
import ControlPanel from "./components/ControlPanel";
import { useState } from "react";
import { Elevator } from "./types";

function App() {
  const [elevators, setElevators] = useState<Record<string, Elevator>>({});

  return (
    <div className="app">
      <section className="main-section">
        <Shafts elevators={elevators} setElevators={setElevators} />
      </section>
      <div className="side-bar">
        <ControlPanel
          elevatorsCount={Object.keys(elevators).length}
          setElevators={setElevators}
        />
      </div>
    </div>
  );
}

export default App;
