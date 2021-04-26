import "./UpdateButton.css";

const update = () => {
  console.log("Update Button not working");
};

export const UpdateButton = () => {
  return (
    <button className="update-button" onClick={() => update()}>
      Update
    </button>
  );
};
