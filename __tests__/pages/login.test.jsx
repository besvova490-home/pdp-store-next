import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/login";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Login />);

    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
});
