import { checkCoords } from "../src/utility";
import { it, describe, expect } from "vitest";

describe("check check coords", () => {
  it("works with right coordinates", () => {
    expect(checkCoords({ x: 71, y: 80 })).toBe(true);
  });
  it("returns true for coords just outside the box", () => {
    expect(checkCoords({ x: 60, y: 0 })).toBe(true);
  });
  it("returns false for wrong x coords", () => {
    expect(checkCoords({ x: 12, y: 80 })).toBe(false);
  });
  it("returns false for wrong y coords", () => {
    expect(checkCoords({ x: 75, y: 200 })).toBe(false);
  });
  it("returns false for wrong coords", () => {
    expect(checkCoords({ x: 12, y: 200 })).toBe(false);
  });
});
