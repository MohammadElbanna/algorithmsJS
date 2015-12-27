/* 2- Insertion sort  
In-place, stable, O(n2) when the array is reversed, O(n) when the array is sorted, In practical data it's better than selection and bubble
*/
export function insertionSort(arr) {
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