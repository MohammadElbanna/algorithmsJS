import {swap} from "./helperMethods.js";

/* 1- Selection Sort(
In-place, stable, O(n2) 
*/
export function selectionSort(arr) {
    for(var i = 0; i < arr.length -1; i++){
        var minIndex = i;
        
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        swap(arr, i, minIndex);
    }
    return arr;
}
