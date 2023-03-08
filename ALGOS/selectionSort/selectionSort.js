/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    
*/
const myArr = [3,2,9,5,1,4,8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

function selectionSort(arr){ }


console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++){
        let minIdx = i

        for (let j = i + 1; j < arr.length; j++){

            if (arr[j] < arr[minIdx]){
                minIdx = j
            }
        } 
        const temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
    }
    return arr
}

