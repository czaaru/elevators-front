import "./App.css";
import Shafts from "./components/Shafts";

function App() {
  return (
    <div className="app">
      <section className="main-section">
        <Shafts />
      </section>
      <div className="side-bar">Control Panel</div>
    </div>
  );
}

export default App;
