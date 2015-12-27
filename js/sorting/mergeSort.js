// not in-place algorithm that runs in O(nlogn)
export function mergeSort(arr) {
    let arrLen = arr.length;
    if(arrLen < 2) {
        return;
    }
    
    let mid = arrLen / 2;
    
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid, arrLen);
    
    mergeSort(leftArray);
    mergeSort(rightArray);
    
    merge(arr, leftArray, rightArray);
    
}


function merge (arr, leftArray, rightArray) {
    let leftPointer = 0, rightPointer = 0, arrPointer = 0;
    
    while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if(leftArray[leftPointer] <= rightArray[rightPointer]) {
            arr[arrPointer] = leftArray[leftPointer];
            leftPointer ++;
        }
        else {
            arr[arrPointer] = rightArray[rightPointer];
            rightPointer ++;
        }
        arrPointer ++;
    }
    
    // no either the left array or the right array has remaining items
    while(leftPointer < leftArray.length) {
        arr[arrPointer] = leftArray[leftPointer];
        leftPointer ++;
        arrPointer ++;
    }
    
    while(rightPointer < rightArray.length) {
        arr[arrPointer] = rightArray[rightPointer];
        rightPointer ++;
        arrPointer ++;
    }

}