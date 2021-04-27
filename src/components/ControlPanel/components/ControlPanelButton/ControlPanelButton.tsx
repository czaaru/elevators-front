import "./ControlPanelButtons.css";

interface ControlPanelButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export const ControlPanelButton = ({
  onClick,
  text,
  disabled = false,
}: ControlPanelButtonProps) => {
  return (
    <button
      className="control-panel-button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
