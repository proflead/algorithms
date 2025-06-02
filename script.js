document.addEventListener('DOMContentLoaded', () => {
    const examplesContainer = document.getElementById('examples');
    const outputElement = document.getElementById('output');

    const algorithms = [
        {
            name: "Bubble Sort (Unsorted)",
            func: (arr) => new BubleSort().bubleSort(arr.slice()), // Use slice to pass a copy
            data: [5, 1, 4, 2, 8],
            display: (input, result) => `Bubble Sort:
Input: [${input.join(', ')}]
Sorted: [${result.join(', ')}]`
        },
        {
            name: "Bubble Sort (Nearly Sorted)",
            func: (arr) => new BubleSort().bubleSort(arr.slice()),
            data: [1, 2, 4, 3, 5, 6],
            display: (input, result) => `Bubble Sort:
Input: [${input.join(', ')}]
Sorted: [${result.join(', ')}]`
        },
        {
            name: "Insertion Sort",
            func: (arr) => insertionSort(arr.slice()), // Use slice
            data: [7, 3, 5, 8, 2, 9, 4, 1],
            display: (input, result) => `Insertion Sort:
Input: [${input.join(', ')}]
Sorted: [${result.join(', ')}]`
        },
        {
            name: "Binary Search (Iterative - Target Found)",
            func: binarySearchIterative,
            data: { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 7 },
            display: (input, result) => `Binary Search (Iterative):
Array: [${input.array.join(', ')}]
Target: ${input.target}
Index: ${result}`
        },
        {
            name: "Binary Search (Iterative - Target Not Found)",
            func: binarySearchIterative,
            data: { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 11 },
            display: (input, result) => `Binary Search (Iterative):
Array: [${input.array.join(', ')}]
Target: ${input.target}
Index: ${result}`
        },
        {
            name: "Binary Search (Recursive - Target Found)",
            func: binarySearchRecursive,
            data: { array: [10, 20, 30, 40, 50], target: 20 },
            display: (input, result) => `Binary Search (Recursive):
Array: [${input.array.join(', ')}]
Target: ${input.target}
Index: ${result}`
        },
        {
            name: "Jump Search (Target Found)",
            func: jumpSearch,
            // Ensure jump search data is sorted
            data: { array: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], target: 50 },
            display: (input, result) => `Jump Search:
Array: [${input.array.join(', ')}]
Target: ${input.target}
Index: ${result}`
        },
        {
            name: "Jump Search (Target Not Found)",
            func: jumpSearch,
            data: { array: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], target: 55 },
            display: (input, result) => `Jump Search:
Array: [${input.array.join(', ')}]
Target: ${input.target}
Index: ${result}`
        }
        // ArrayClass example can be added later as it requires more specific handling for its methods
    ];

    algorithms.forEach(algo => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = algo.name;
        link.style.display = 'block'; // Make each link appear on a new line
        link.style.marginBottom = '5px'; // Add some space between links

        link.addEventListener('click', (event) => {
            event.preventDefault();
            outputElement.textContent = 'Running...';
            try {
                let result;
                let displayData;
                if (algo.data.array !== undefined) { // For search algorithms
                    // For search algorithms, pass a copy of the array if they might modify it,
                    // though current search algos don't. For consistency:
                    displayData = { array: algo.data.array.slice(), target: algo.data.target };
                    result = algo.func(displayData.array, displayData.target);
                } else { // For sort algorithms
                    displayData = algo.data.slice(); // Pass a copy
                    result = algo.func(displayData);
                }
                outputElement.textContent = algo.display(algo.data, result);
            } catch (e) {
                outputElement.textContent = `Error: ${e.message}
${e.stack}`;
                console.error(e);
            }
        });
        examplesContainer.appendChild(link);
    });
});
