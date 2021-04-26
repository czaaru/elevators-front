import { Dispatch, SetStateAction } from "react";
import { getConfigProperty } from "../../../../../../config";
import { Elevator } from "../../../../../../types";
import "./EmptyFloor.css";

interface EmptyFloorProps {
  floorNumber: number;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

const BACKEND_URL = getConfigProperty("BACKEND_URL");

const postPickUp = async (body = {}, endpoint = BACKEND_URL) => {
  const response = await fetch(`${endpoint}/elevators/pickup`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });

  return response.json();
};

const pickUpButton = async (
  floor: number,
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>
) => {
  setElevators(await postPickUp({ floor }));
};

export const EmptyFloor = ({ floorNumber, setElevators }: EmptyFloorProps) => (
  <div className="floor">
    <div className="floor-doors">
      <div></div>
      <div></div>
    </div>
    <div className="floor-panel">
      <p>{floorNumber}</p>
      <button
        className="pick-up-button"
        onClick={() => pickUpButton(floorNumber, setElevators)}
      ></button>
    </div>
  </div>
);
