import React from "react";
import { render, screen } from "@testing-library/react";
import SingleProductPage from "../../pages/product/[id]";

describe("SingleProductPage", () => {
  it("renders a heading", () => {
    render(<SingleProductPage />);

    const heading = screen.getByTestId("single-product-page");
    expect(heading).toBeInTheDocument();
  });
});
