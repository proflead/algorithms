// Algorithm Jump Search
// Searches a SORTED array in O(sqrt(n)) time with the default jump step.
// Jump through block endpoints, then linearly scan the candidate block.

// @return index of target element in array, or -1 if absent.
// start is inclusive; stop is exclusive.
const jumpSearch = (array, target, start = 0, stop = array.length, jumpStep = Math.max(1, Math.floor(Math.sqrt(array.length)))) => {
    if (!Number.isInteger(jumpStep) || jumpStep < 1) {
        throw new RangeError('jumpStep must be a positive integer');
    }
    stop = Math.min(stop, array.length);
    for (let blockStart = start; blockStart < stop; blockStart += jumpStep) {
        const blockEnd = Math.min(blockStart + jumpStep, stop);
        if (array[blockEnd - 1] >= target) {
            for (let i = blockStart; i < blockEnd; i++) {
                if (array[i] === target) return i;
                if (array[i] > target) return -1;
            }
            return -1;
        }
    }
    return -1;
}

let numbers = [0,1,22,33,44,55,66,77,88,99];
console.log(jumpSearch(numbers, 99));
