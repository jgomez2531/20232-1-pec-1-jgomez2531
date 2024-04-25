import { ex1, ex2 } from "./pec1";

describe("ex1", () => {
  test("should return true when value is between 0 and 17", () => {
    expect(ex1(10)).toBe(true);
    expect(ex1(20)).toBe(false);
    expect(ex1(18)).toBe(false);
    expect(ex1(17)).toBe(true);
    expect(ex1(0)).toBe(true);
    expect(ex1(-2)).toBe(false);
    expect(ex1(-3)).toBe(false);
  });
});

describe("ex2", () => {
  test("should calculate the total price with tax", () => {
    expect(ex2(2.0, 20)).toBe(2.4);
    expect(ex2(9.98, 20)).toBe(11.976);
    expect(ex2(10.0, 10)).toBe(11.0);
  });
});
