// Algorithm Jump Search
// It's a recursive algorithm. The complexity is O(log n). 
// The idea is to define the step and jump through the array and compare the target 
// value with current. If current value > target then step back and start an 
// linear search of each value between previous jumps step and current.

// @return index of target element in array
const jumpSearch = (array, target, start = 0, stop = array.length, jumpStep = Math.floor(Math.sqrt(array.length-1))) => {
    for(let i = start; i <= stop; i +=jumpStep) {
        if (array[i] === target) {
            return i;
        } else if (array[i] > target) {
            let previouseI = i-jumpStep;
            return jumpSearch(array, target, previouseI, i+1, 1);
        }
    }
}

let numbers = [0,1,22,33,44,55,66,77,88,99];
console.log(jumpSearch(numbers, 99));