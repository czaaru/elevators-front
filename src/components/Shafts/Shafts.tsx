import { Dispatch, SetStateAction, useEffect } from "react";
import { Elevator } from "../../types";
import Shaft from "./components/Shaft";
import "./Shafts.css";

interface ShaftProps {
  elevators: Record<string, Elevator>;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

export const Shafts = ({ setElevators, elevators }: ShaftProps) => {
  useEffect(() => {
    const fetchElevatorStatus = async () => {
      const BACKEND_URL = "https://czaru-elevator-api.herokuapp.com/elevators";

      const response = await fetch(BACKEND_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setElevators(await response.json());
    };
    fetchElevatorStatus();
  }, [setElevators]);

  return (
    <div className="shafts">
      {Object.entries(elevators).map(([shaftId, elevator]) => (
        <Shaft
          key={shaftId}
          elevator={elevator}
          elevatorIndex={Number(shaftId)}
          setElevators={setElevators}
        />
      ))}
    </div>
  );
};
