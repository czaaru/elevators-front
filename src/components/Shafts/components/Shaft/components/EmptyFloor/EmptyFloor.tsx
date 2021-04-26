import { Dispatch, SetStateAction } from "react";
import { Elevator } from "../../";
import "./EmptyFloor.css";

interface EmptyFloorProps {
  floorNumber: number;
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
}

const postPickUp = async (floor = {}) => {
  const BACKEND_URL =
    "https://czaru-elevator-api.herokuapp.com/elevators/pickup";
  const response = await fetch(BACKEND_URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(floor),
  });
  console.log("inside postPickUp: ", floor);
  return response.json();
};

const pickUpButton = async (floor: number, setElevators: any) => {
  console.log("Pick me up. I'm on the floor ", floor);
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
