import { Dispatch, SetStateAction } from "react";
import { Elevator } from "../../types";
import ControlPanelButton from "./components/";
import {
  createAddElevatorFetch,
  createResetFetch,
  createStepFetch,
} from "./components/fetch";
import "./ControlPanel.css";

interface ControlPanelProps {
  elevatorsCount: number;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

const maxElevatorCount = 16;

export const ControlPanel = ({
  setElevators,
  elevatorsCount,
}: ControlPanelProps) => {
  return (
    <div className="control-panel">
      <p>Control Panel</p>
      <div className="control-panel-buttons">
        <ControlPanelButton
          onClick={createAddElevatorFetch({ id: elevatorsCount }, setElevators)}
          disabled={elevatorsCount >= maxElevatorCount}
          text="Add Elevator"
        />
        <ControlPanelButton
          onClick={createStepFetch(setElevators)}
          text="Step"
        />
        <ControlPanelButton
          onClick={createResetFetch(setElevators)}
          text="Reset"
        />
      </div>
    </div>
  );
};
