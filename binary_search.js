// Algorithm Binary Search 
// We use it to find the value in a SORTED array.
// The complexity of this algorithm O(log n)

//Iterative implementation
const binarySearchIterative = (intArray, target) => {
    if (!intArray || intArray.length === 0) {
        return -1;
    }
    let start = 0;
    let end = intArray.length -1; // Corrected: end should be last index

    while(end >= start) {
        let mid = Math.floor((start + end) / 2); // Recalculate mid inside loop
        if(intArray[mid] === target) {
            return mid;
        } else if(target > intArray[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

//Recursive implementation
const binarySearchRecursive = (intArray, target, start = 0, end = intArray.length -1) => { // Corrected: default end is last index
    if (!intArray || intArray.length === 0) {
        return -1;
    }
    // Base case: start > end means element not found
    if(start > end){
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if(intArray[mid] === target) {
        return mid;
    } else if(target > intArray[mid]) {
        return binarySearchRecursive(intArray, target, mid + 1, end);
    } else {
        return binarySearchRecursive(intArray, target, start, mid - 1);
    }
}
