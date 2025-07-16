function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = '';
  if (strs.length === 0) return '';
  commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    if (str === '') return '';

    let j = 0;
    while (
      j < commonPrefix.length &&
      j < str.length &&
      commonPrefix[j] === str[j]
    ) {
      j++;
    }
    commonPrefix = commonPrefix.slice(0, j);
    if (commonPrefix === '') break;
  }
  return commonPrefix;
}
