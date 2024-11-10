
// In JavaScript, a closure is created when a function remembers and accesses its lexical scope, 
// even when that function is executed outside of its original scope. Closures are powerful for encapsulation, 
// data privacy, and creating functions with specific, tailored behaviors.

// Use Cases of Closures
// Data Privacy and Encapsulation:

// Closures enable the creation of private variables, as inner functions can access variables defined in their outer functions even after the outer function has finished execution.
// For example, you can create functions that maintain internal state, like counters or configurations, without exposing those details to the global scope.

// function greet(greeting) {
//     return function (name) {
//         return `${greeting}, ${name}!`;
//     };
// }
// const sayHello = greet('Hello');
// console.log(sayHello('Alice')); // Hello, Alice!


const counter = (check) => {
    let count = 0;
    return function(refresh){
        console.log(refresh, check)
        count++;
        return count;
    }
}

const getCounter = counter();
console.log(getCounter('refresh'));
getCounter()
getCounter()
getCounter()
console.log(getCounter());
