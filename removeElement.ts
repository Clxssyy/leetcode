function removeElement(nums: number[], val: number): number {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return nums.length;
}
