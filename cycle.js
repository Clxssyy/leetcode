/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values) {
  let i = 0;
  return () => {
    if (i > values.length - 1) i = 0;
    return values[i++];
  };
}
