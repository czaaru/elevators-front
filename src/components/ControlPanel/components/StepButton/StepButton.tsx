import "./StepButton.css";

const step = () => {
  console.log("Step Button not working");
};

export const StepButton = () => {
  return (
    <button className="step-button" onClick={() => step()}>
      Step
    </button>
  );
};
