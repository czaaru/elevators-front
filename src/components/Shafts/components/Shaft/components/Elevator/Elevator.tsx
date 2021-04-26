import "./Elevator.css";

interface ElevatorProps {
  currentFloor: number;
  destinations: number[];
  direction: -1 | 0 | 1;
}

export const Elevator = ({
  currentFloor,
  destinations,
  direction,
}: ElevatorProps) => (
  <div className="elevator">
    <div className="elevator-doors">
      <div className="elevator-doors-open"></div>
      <div className="elevator-inside">
        <p>{destinations}</p>
        <p>{direction}</p>
      </div>
      <div className="elevator-doors-open"></div>
    </div>
    <div className="floor-panel">
      <p>{currentFloor}</p>
      <button
        className="pick-up-button"
        onClick={() => console.log("I'm already at floor ", currentFloor)}
      ></button>
    </div>
  </div>
);
