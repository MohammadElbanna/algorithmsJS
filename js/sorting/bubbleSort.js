import {swap} from "./helperMethods.js";

/* 
In bubble sort we go n-1 passes on the array, in each pass the biggest number would be in its right index in the array (will bubble up)
In each pass you compare each element with its adjacent element
After each pass the next biggest element is placed in the right position, so the pass will loop to arr.length - j -1 where j is the pass number not arr.length -1
We could also put a flag to see when we don't do any swaps to deduce that the array is already sorted.

O(n2) 
*/
export function bubbleSort(arr) {
    for(var j = 0; j < arr.length -1; j ++) {
        
        // this is a pass
        for (var i = 0; i < arr.length - j - 1; i++) {
            if(arr[i + 1] < arr[i]) {
                swap(arr, i, i+1);
            }
        }
    }
    return arr;
}