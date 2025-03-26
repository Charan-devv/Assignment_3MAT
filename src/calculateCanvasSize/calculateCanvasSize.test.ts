import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {

  // Test for valid positive integer inputs
  test('should calculate the correct canvas size for positive integers', () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);  // 10 * 20 = 200
    expect(calculateCanvasSize("15", "5")).toBe(75);    // 15 * 5 = 75
    expect(calculateCanvasSize("100", "200")).toBe(20000);  // 100 * 200 = 20000
  });
});