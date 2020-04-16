
/**
 * Rounds the given quantity to the specified number of decimal places
 * @param quantity
 * @param decimals
 */
export function quantize(quantity: number, decimals: number): number {
  const multiplicator = Math.pow(10, decimals);
  const q = parseFloat((quantity * multiplicator).toFixed(11));
  return Math.round(q) / multiplicator;
}
