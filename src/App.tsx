import "./App.css";
import Shafts from "./components/Shafts";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="app">
      <section className="main-section">
        <Shafts />
      </section>
      <div className="side-bar">
        <ControlPanel />
      </div>
    </div>
  );
}

export default App;
