class BubleSort {
    bubleSort(intArray)
    {
        let isSorted = false;
        for(let i = 0; i < intArray.length; i++) {
            isSorted = true;
            for(let j = 1; j < intArray.length-i; j++) {
                if(intArray[j] < intArray[j - 1]) {
                    this.swap(intArray, j, j-1);
                    isSorted = false;
                }
                
            }
            if(isSorted) {
                return intArray;
            }
        
        }
        return intArray;
    }
    swap(intArray, index1, index2) {
        let temp = intArray[index1];
        intArray[index1] = intArray[index2];
        intArray[index2] = temp;
    }
    
}

let numbers = [1,2,5,7,8,3,1,23,4];
let sortedNumbers = [1,2,3,4,5];
let sorting = new BubleSort();
console.log(sorting.bubleSort(sortedNumbers));