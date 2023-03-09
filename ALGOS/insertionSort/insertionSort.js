/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
*/


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertionSort(arr) {

    for (let x = 1; x < arr.length; x++){
        let temp = arr[x]

        for(let y = x-1; y >=0; y--){

            if(arr[y] > temp){
                arr[y+1] = arr[y]
                if(y == 0 ){
                    arr[y] = temp
                }
            }
            else{
                arr[y+1] = temp;
                break; // because everything else on the left is already sorted
            }
        }

    }
    return arr;
   
}

console.log(insertionSort(numsRandomOrder));