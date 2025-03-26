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
      // Test when length is 0 but width is non-zero
  test("should calculate perimeter correctly when length is 0", () => {
    const result = calculateCanvasPerimeter("0", "100");
    expect(result).toEqual(200);  // 2 * (0 + 100) = 200
  });
});