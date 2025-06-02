// Algorithm Jump Search
// Jump Search is a searching algorithm for sorted arrays.
// The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps.
// The complexity is O(sqrt(n)).

const jumpSearch = (array, target) => {
    const n = array.length;
    if (n === 0) return -1; // Handle empty array

    let step = Math.floor(Math.sqrt(n));
    // Ensure step is at least 1, especially for small arrays or if n=1 (sqrt(1)=1)
    step = Math.max(1, step);

    let prev = 0;
    // Finding the block where the element may be present.
    // The condition array[Math.min(prev + step, n) - 1] < target checks the last element of the current block.
    // We continue jumping as long as this last element is less than the target.
    // We also need to ensure 'prev' itself doesn't exceed array bounds.
    while (prev < n) {
        let blockEndIndex = Math.min(prev + step, n) - 1;
        // If the target is smaller than the first element of the current block (or if prev itself is out of bounds after a jump)
        // This can happen if target is very small or array is exhausted.
        // However, the main check is array[blockEndIndex] < target.

        // If the last element of the current block is less than the target, jump to the next block.
        if (array[blockEndIndex] < target) {
            prev += step;
        } else {
            // Target should be in the current block, from prev to blockEndIndex.
            // Or target is not in the array if it's smaller than array[prev].
            break;
        }
    }

    // If prev has jumped beyond the array length, target is not found.
    if (prev >= n) return -1;

    // Doing a linear search for target in the block identified.
    // The search goes from 'prev' up to Math.min(prev + step, n).
    for (let i = prev; i < Math.min(prev + step, n); i++) {
        if (array[i] === target) {
            return i; // Found element
        }
    }

    return -1; // Element not found
};
