export function formatWeight(w: number): string {
  if (w < 0.01) return "0";
  return w % 1 === 0 ? w.toString() : parseFloat(w.toFixed(2)).toString();
}
