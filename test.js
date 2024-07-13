import { render, fireEvent, screen } from "@testing-library/react";
import App from "./app";

test("Adds one", () => {
    //render the app component
    render(<app />);

    //save the heading in a variable
    const heading = screen.getByTestId("currentNumber");

    //save the button in a variable
    const btn = screen.getByTestId("currentNumber");

    //click the btn
    fireEvent.click(btn);

    //test assumption
    expect(heading).toHaveTextContent("2");

});