//------------------------------Insert Ele at pos-----------------------

function insertAt(nums, pos, value) {
  let n = nums.length;

  for (let i = n - 1; i >= pos; i--) {
    nums[i + 1] = nums[i];
  }
  nums[pos] = value;
  return nums;
}
nums = [2, 4, 5, 1, 7, 9];
let pos = 2;
let value = 3;
console.log(insertAt(nums, pos, value));
