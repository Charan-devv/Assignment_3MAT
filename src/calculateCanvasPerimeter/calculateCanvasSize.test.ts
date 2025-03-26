import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
   // Test for valid positive inputs (general case)
   test("returns correct result for positive integer values", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(220);  // 2 * (10 + 100) = 220
  });
});
