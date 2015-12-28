import {swap} from "./helperMethods.js";

export function quickSort(arr) {
    quickSort2(arr, 0, arr.length -1);
}
    
    
function quickSort2(arr, start, end) {
    if(start >= end) {
        // if start == end that means that the pivot was on the righmost side on the calling function
        // if start > end that means that the pivot was on the leftmost side from the calling function
        return;
    }
    let pivotIndex = partition(arr, start, end);
    quickSort2(arr, start, pivotIndex -1);
    quickSort2(arr, pivotIndex + 1, end);
}


// the pivot is always at the end
// TODO: make the randomized version of pivot. The idea is choose a random position then swap it with the end positon the continue the
// algorithm as is.
function partition(arr, start, end) {
    let pIndex = start;
    let pivot = arr[end];
    
    for(let i = start; i < end ; i++) {
        if(arr[i] <= pivot) {
            swap(arr, i, pIndex);
            pIndex ++;
        }
    }
    // put the pivot in its appropriate place.
    swap(arr, pIndex, end);
    return pIndex;
}