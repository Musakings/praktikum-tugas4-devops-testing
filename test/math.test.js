const { add, subtract, multiply, divide } = require("../src/math");

describe("Math Functions", () => {
  test("add should return correct result", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract should return correct result", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiply should return correct result", () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test("divide should return correct result", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero should throw error", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});