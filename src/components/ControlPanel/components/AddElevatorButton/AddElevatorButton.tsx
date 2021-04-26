import "./AddElevatorButton.css";

const addElevator = () => {
  console.log("Add Elevator Button not working");
};

export const AddElevatorButton = () => {
  return (
    <button className="add-elevator-button" onClick={() => addElevator()}>
      Add Elevator
    </button>
  );
};
