import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us  page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Contact Now");

    expect(button).toBeInTheDocument();
  });

  test("Should have input with given placeholder  inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Enter your name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 inputBoxes inside contact us component", () => {
    render(<Contact />);

    //querying
    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
  });
});
