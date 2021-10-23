import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../pages/login";

describe("Login", () => {
  it("renders a heading", () => {

    //added for correct rendering facebook login button
    const script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    render(<LoginPage />);

    const heading = screen.getByTestId("login-page");
    expect(heading).toBeInTheDocument();
  });
});
