import calculateCanvasPerimeter from './calculateCanvasSize';  // Rename the import to match the perimeter function

describe("calculateCanvasPerimeter", () => {
  test("should calculate perimeter correctly for given length and width", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);  // 2 * (10 + 100) = 220
  });
});