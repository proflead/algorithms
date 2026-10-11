const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

// Load the standalone demos without changing their public structure.
const context = vm.createContext({ console: { log() {} } });
for (const file of ['binary_search.js', 'jump_search.js']) {
    const names = file === 'binary_search.js'
        ? ['binarySearchIterative', 'binarySearchRecursive'] : ['jumpSearch'];
    const exports = names.map(name => `globalThis.${name} = ${name};`).join('\n');
    vm.runInContext(`{\n${fs.readFileSync(`${__dirname}/${file}`, 'utf8')}\n${exports}\n}`, context);
}

const algorithms = ['binarySearchIterative', 'binarySearchRecursive', 'jumpSearch'];
let checks = 0;
for (let length = 0; length <= 40; length++) {
    // Duplicates and gaps exercise both present and absent targets.
    const array = Array.from({ length }, (_, i) => Math.floor(i / 2) * 3);
    for (let target = -1; target <= length * 2 + 1; target++) {
        context.input = array;
        context.target = target;
        for (const algorithm of algorithms) {
            const index = vm.runInContext(`${algorithm}(input, target)`, context, { timeout: 1000 });
            if (array.includes(target)) {
                assert.ok(index >= 0 && index < array.length, algorithm);
                assert.equal(array[index], target, algorithm);
            } else {
                assert.equal(index, -1, algorithm);
            }
            checks++;
        }
    }
}
assert.equal(vm.runInContext('binarySearchRecursive([1, 2, 3], 1)', context), 0);
assert.equal(vm.runInContext('jumpSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)', context), 10);
assert.equal(vm.runInContext('jumpSearch([1, 2, 3, 4, 5], 4, 1, 4, 2)', context), 3);
assert.equal(vm.runInContext('jumpSearch([1, 2, 3, 4, 5], 5, 1, 4, 2)', context), -1);
assert.throws(() => vm.runInContext('jumpSearch([1], 2, 0, 1, 0)', context), /positive integer/);
console.log(`Passed ${checks} search checks and boundary regressions.`);
