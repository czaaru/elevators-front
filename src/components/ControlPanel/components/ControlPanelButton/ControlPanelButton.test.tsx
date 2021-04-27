import { fireEvent, render, screen } from "@testing-library/react";
import { ControlPanelButton } from "./ControlPanelButton";

describe("ControlPanelButton", () => {
  it("should render button with text", () => {
    const text = "Render meeee";
    render(<ControlPanelButton text={text} onClick={jest.fn()} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should call passed function when clicked", () => {
    const onClickMock = jest.fn();
    render(<ControlPanelButton text="Click me." onClick={onClickMock} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should not call passed function when clicked, but disabled", () => {
    const onClickMock = jest.fn();
    render(
      <ControlPanelButton
        text="Cannot click me!"
        onClick={onClickMock}
        disabled={true}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
