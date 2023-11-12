import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/Home";

describe("home component", () => {
  it("renders header", () => {
    render(<Home />);
    expect(screen.getByText("Where's Who")).toBeInTheDocument();
  });
});
