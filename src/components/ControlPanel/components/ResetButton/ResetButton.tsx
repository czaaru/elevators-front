import { getConfigProperty } from "../../../../config";
import "./ResetButton.css";

interface ResetButtonProps {
  ////////////////////////   setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>;
  setElevators: any;
}

const BACKEND_URL = getConfigProperty("BACKEND_URL");

const fetchReset = async (endpoint = BACKEND_URL) => {
  const response = await fetch(`${endpoint}/simulation/reset`, {
    method: "DELETE",
  });
  console.log("hello", response);
  return response.json();
};

// const resetButton = async (
//   setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>
// ) => {
//   setElevators(await fetchReset());
// };

const reset = () => {
  console.log("Reset Button not working");
};

export const ResetButton = ({ setElevators }: ResetButtonProps) => {
  return (
    <button className="reset-button" onClick={() => reset()}>
      Reset
    </button>
  );
};
