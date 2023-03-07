/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


  For review, create a function that uses BubbleSort to sort an unsorted array in-place.

  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

/**
 * Sorts the given nums in-place by mutating the array.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort1(nums = []) {

  for (let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length -i - 1; j++){
      if(nums[j]> nums[j+1]){

        const temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp

      }
    }
  }
  return nums
}

// using a while loop
function bubbleSort2(nums = []) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        isSorted = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(bubbleSort1(nums1));
console.log(bubbleSort1(nums2));
console.log(bubbleSort1(nums3));