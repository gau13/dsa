//------------------------------Delete ele from array-----------------------

function deleteEle(nums, value) {
  let pos;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === value) {
      pos = i;
      break;
    }
  }

  if (pos === -1) {
    return nums;
  }

  for (let i = pos; i < n - 1; i++) {
    nums[i] = nums[i + 1];
  }
  nums.length--;
  return nums;
}

nums = [2, 4, 5, 1, 7, 9];
let value = 9;
console.log(deleteEle(nums, value));
