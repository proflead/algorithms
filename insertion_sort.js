const insertionSort = intArray => {
    for(let i = 1; i < intArray.length; i++){
        let current = intArray[i];
        let j = i - 1;
        while(j >= 0 && intArray[j] > current){
            intArray[j+1] = intArray[j];
            j--;
        }
        intArray[j+1] = current;
    }
    return intArray;
}