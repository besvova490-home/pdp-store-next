import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryPage from "../../pages/category/[category]";

describe("CategoryPage", () => {
  it("renders a heading", () => {
    render(<CategoryPage />);

    const heading = screen.getByTestId("category-page");
    expect(heading).toBeInTheDocument();
  });
});
