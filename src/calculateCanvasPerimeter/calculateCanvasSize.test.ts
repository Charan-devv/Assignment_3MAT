import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
    // Test for valid inputs
    test("returns correct result for positive integers", () => {
      const result = calculateCanvasSize("10", "100");
      expect(result).toEqual(1000); // 2 * (10 + 100) = 1000
    });
});
