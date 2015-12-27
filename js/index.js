// swap the 2 values at index i and j
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp ;
}

/* Sorting Algorithms */

/* 1- Selection Sort(
In-place, stable, O(n2) 
*/
function selectionSort(arr) {
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


/* 2- Insertion sort  
In-place, stable, O(n2) when the array is reversed, O(n) when the array is sorted, In practical data it's better than selection and bubble
*/
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var hole = i;
        var value = arr[i];
        
        // loop on sorted subset of the array
        while (hole > 0 && arr[hole] < arr[hole -1]) {
            arr[hole] = arr[hole - 1];
            hole --;
            arr[hole] = value;
        }
    }
    return arr;
}



function test () {
    var arr = [5,3,4,2,1];
    console.log(selectionSort(arr));
    console.log(insertionSort(arr));
}

test();