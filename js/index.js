import {insertionSort} from "./sorting/insertionSort.js";
import {selectionSort} from "./sorting/selectionSort.js";
import {bubbleSort} from "./sorting/bubbleSort.js";
import {quickSort} from "./sorting/quickSort.js";
import {mergeSort} from "./sorting/mergeSort.js";



function test () {
    var arr = [5,3,4,2,1];
    console.log("quick: " + quickSort(arr));
    console.log(arr);
//    console.log("insertion: " + insertionSort(arr.slice()));
//    console.log("selection: " + selectionSort(arr.slice()));
//    console.log("bubble: " + bubbleSort(arr.slice()));
}

test();

