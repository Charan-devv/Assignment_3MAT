export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const a = parseInt(length);
  const b = parseInt(width);
  return Math.sqrt(a * a + b * b);  // Correct formula for diagonal: sqrt(length^2 + width^2)
}
