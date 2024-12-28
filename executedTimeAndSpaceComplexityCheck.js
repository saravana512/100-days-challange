
const startMemory = process.memoryUsage().heapUsed; // Memory before execution

console.time('Function Execution Time');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const mapStore = new Map();
    // const stringLength = strs.length;
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().toString();
        if (mapStore.has(sortedString)) {
            mapStore.get(sortedString).push(strs[i])
        } else {
            mapStore.set(sortedString, [strs[i]])
        }
    }

    return [...mapStore.values()];
};

groupAnagrams(
    ["eat","tea","tan","ate","nat","bat"]
)

console.timeEnd('Function Execution Time');
const endMemory = process.memoryUsage().heapUsed; // Memory before execution

console.log(`Memory Used: ${(endMemory - startMemory) / 1024} KB`)
