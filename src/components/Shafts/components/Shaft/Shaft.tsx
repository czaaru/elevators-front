import { Dispatch, SetStateAction } from "react";
import { Elevator } from "../../../../types";
import { Elevator as ElevatorComponent } from "./components/Elevator";
import { EmptyFloor } from "./components/EmptyFloor";
import "./Shaft.css";

interface ShaftProps {
  elevator: Elevator;
  elevatorIndex: number;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

const numberOfFloors = 8;

export const Shaft = ({
  elevator: { currentFloor, destinations, direction },
  elevatorIndex,
  setElevators,
}: ShaftProps) => {
  const elevatorNumber = elevatorIndex + 1;
  const floors = [...Array(numberOfFloors)].map((_, index) =>
    index === currentFloor ? (
      <ElevatorComponent
        key={`elevator-${elevatorIndex}`}
        currentFloor={currentFloor}
        destinations={destinations}
        direction={direction}
      />
    ) : (
      <EmptyFloor
        key={`shaft-${elevatorIndex}-floor-${index}`}
        floorNumber={index}
        setElevators={setElevators}
      />
    )
  );
  return (
    <div className="shaft">
      {floors}
      <p>Elevator {elevatorNumber}</p>
    </div>
  );
};
