const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require("../calculator");

describe("calculator arithmetic functions", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative and positive numbers", () => {
      expect(add(-5, 2)).toBe(-3);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("subtracts resulting in a negative number", () => {
      expect(subtract(3, 8)).toBe(-5);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test("multiplies by zero", () => {
      expect(multiply(9, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(20, 5)).toBe(4);
    });

    test("supports decimal results", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
  });
});

describe("calculate dispatcher", () => {
  test("supports addition", () => {
    expect(calculate("+", 2, 3)).toBe(5);
  });

  test("supports subtraction", () => {
    expect(calculate("-", 10, 4)).toBe(6);
  });

  test("supports multiplication", () => {
    expect(calculate("*", 45, 2)).toBe(90);
  });

  test("supports division", () => {
    expect(calculate("/", 20, 5)).toBe(4);
  });

  test("throws for unsupported operations", () => {
    expect(() => calculate("%", 10, 2)).toThrow(
      "Unsupported operation. Use one of: +, -, *, /",
    );
  });

  test("throws for division by zero through dispatcher", () => {
    expect(() => calculate("/", 10, 0)).toThrow(
      "Division by zero is not allowed.",
    );
  });
});
