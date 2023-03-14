function mergeSortedArrays(arr1, arr2) {
    // setup
    let sortedArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
  
    // check lengths of arrays
    // push to sorted array
    // return the array
    // -----------------------
      let sort = [];
  
      while (arr1.length && arr2.length) {
           if (arr1[0] < arr2[0]) {
              // shift pops from the front, not ideal.
              sort.push(arr1.shift());
          } else {
              sort.push(arr2.shift());
          }
      }
  
      // takes remainders and squashes them together in cases with one array
      return sort.concat(arr1.slice().concat(arr2.slice()));
  }



function mergeSort(arr){
    // recursive function
    // (recursive) split arrays down to one element
    // then call the helper functiont to merge them back
        // mergeSortedArray(leftArr, rightArr)

    // return arrays of single values
    if (arr.length < 2){
        return arr
    }


    // get the middle index, floor it to prevent floats
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return mergeSortedArrays(mergeSort(left), mergeSort(right))




}
  

