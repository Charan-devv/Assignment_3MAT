import calculateCanvasPerimeter from './calculateCanvasSize';  // Rename the import to match the perimeter function

describe("calculateCanvasPerimeter", () => {
  test("should calculate perimeter correctly for given length and width", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);  // 2 * (10 + 100) = 220
  });
    // Test for when one dimension is 0 (edge case)
    test("should return 0 for length and width of 0", () => {
      const result = calculateCanvasPerimeter("0", "0");
      expect(result).toEqual(0);  // 2 * (0 + 0) = 0
    });  
    test("should handle very large values correctly", () => {
      const result = calculateCanvasPerimeter("1000000", "2000000");
      expect(result).toEqual(6000000000);  // 2 * (1000000 + 2000000) = 6000000000
    });
});