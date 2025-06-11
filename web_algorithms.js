function bubbleSort(intArray) {
  let isSorted = false;
  for (let i = 0; i < intArray.length; i++) {
    isSorted = true;
    for (let j = 1; j < intArray.length - i; j++) {
      if (intArray[j] < intArray[j - 1]) {
        const temp = intArray[j];
        intArray[j] = intArray[j - 1];
        intArray[j - 1] = temp;
        isSorted = false;
      }
    }
    if (isSorted) {
      return intArray;
    }
  }
  return intArray;
}

function insertionSort(intArray) {
  for (let i = 1; i < intArray.length; i++) {
    const current = intArray[i];
    let j = i - 1;
    while (j >= 0 && intArray[j] > current) {
      intArray[j + 1] = intArray[j];
      j--;
    }
    intArray[j + 1] = current;
  }
  return intArray;
}

function binarySearchIterative(intArray, target) {
  let start = 0;
  let end = intArray.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (intArray[mid] === target) {
      return mid;
    } else if (target > intArray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursive(intArray, target, start = 0, end = intArray.length - 1) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (intArray[mid] === target) {
      return mid;
    } else if (target > intArray[mid]) {
      return binarySearchRecursive(intArray, target, mid + 1, end);
    }
    return binarySearchRecursive(intArray, target, start, mid - 1);
  }
  return -1;
}

function jumpSearch(array, target, start = 0, stop = array.length, jumpStep = Math.floor(Math.sqrt(array.length))) {
  for (let i = start; i < stop; i += jumpStep) {
    if (array[i] === target) {
      return i;
    } else if (array[i] > target) {
      const prev = i - jumpStep;
      return jumpSearch(array, target, prev, i + 1, 1);
    }
  }
  return -1;
}


if (typeof module !== "undefined") {
  module.exports = { bubbleSort, insertionSort, binarySearchIterative, binarySearchRecursive, jumpSearch };
}
