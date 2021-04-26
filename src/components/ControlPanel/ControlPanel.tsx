import AddElevatorButton from "./components/AddElevatorButton";
import ResetButton from "./components/ResetButton/";
import StepButton from "./components/StepButton";
import UpdateButton from "./components/UpdateButton";
import "./ControlPanel.css";

export const ControlPanel = () => {
  const setElevators = console.log("Hello");
  return (
    <div className="control-panel">
      <p>Control Panel</p>
      <div className="control-panel-buttons">
        <AddElevatorButton />
        <UpdateButton />
        <StepButton />
        <ResetButton setElevators={setElevators} />
      </div>
    </div>
  );
};
