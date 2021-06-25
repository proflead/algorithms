// Algorithm Binary Search 
// We use it to find the value in a SORTED array.
// The complexity of this algorithm O(log n)

//Iterative implementation
const binarySearchIterative = (intArray, target) => {
    let start = 0;
    let end = intArray.length;
    let mid = Math.floor((start + end) / 2);
    while(end >= start) {
        if(intArray[mid] === target) {
            return mid;
        } else if(target > intArray[mid]) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    return -1;
}

//Recursive implementation
const binarySearchRecursive = (intArray, target, start = 0, end = intArray.length) => {
    let mid = Math.floor((start + end) / 2);
    if(start < end){
        if(intArray[mid] === target) {
            return mid;
        } else if(target > intArray[mid]) {
            return binarySearchRecursive(intArray, target, mid +1, end);
        } else {
            return binarySearchRecursive(intArray, target, start, mid -1);
        }
    }
    return -1;
}

let numbers = [1,2,3,4,5,5,7,8,10,11];
console.log("Iterative: " + binarySearchIterative(numbers, 11));
console.log("Recursive: " + binarySearchRecursive(numbers, 11));