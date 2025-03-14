const { performance } = require("perf_hooks");

function testFunction() {
  let arr = [];
  for (let i = 0; i < 1e6; i++) {
    arr.push(i);
  }
  return arr;
}

const startTime = performance.now();
const startMemory = process.memoryUsage().heapUsed;

testFunction();

const endMemory = process.memoryUsage().heapUsed;
const endTime = performance.now();

console.log(`Memory Usage: ${(endMemory - startMemory) / 1024 / 1024} MB`);
console.log(`Execution Time: ${(endTime - startTime).toFixed(4)} ms`);
