import { Dispatch, SetStateAction, useEffect } from "react";
import { getConfigProperty } from "../../config";
import { Elevator } from "../../types";
import Shaft from "./components/Shaft";
import "./Shafts.css";

interface ShaftProps {
  elevators: Record<string, Elevator>;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

const backendUrl = getConfigProperty("BACKEND_URL");

export const Shafts = ({ setElevators, elevators }: ShaftProps) => {
  useEffect(() => {
    const fetchElevatorStatus = async (endpoint = backendUrl) => {
      const response = await fetch(`${endpoint}/elevators`);

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
