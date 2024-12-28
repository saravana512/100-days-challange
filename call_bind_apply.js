// 'use strict';

// // call

// // Function borrowing 

// // 1) Method 1
// const name = {
//     firstname: 'saro',
//     lastname: 'kum',
//     display: function () {
//         console.log(`The full name is ${this.firstname} ${this.lastname}`)
//     }
// }

// name.display()

// const name1 = {
//     firstname: 'saro1',
//     lastname: 'kum2'
// }

// name.display.call(name1)

// //  Method 2 
// const name3 = {
//     firstname: 'saro4',
//     lastname: 'kum4'
// }

// const display = function (age, pincode) {
//     console.log(this.firstname, this.lastname, age)
// }

// const name4 = {
//     firstname: 'saro5',
//     lastname: 'kum5'
// }

// display.call(name3, 33, '623311');
// display.call(name4, 34, '677777');
// display.apply(name4, [35, '677777']);

// const displayName = display.bind(name4, 34, '677777');
// console.log(displayName);
// console.log(displayName);




// /**
//  * call, apply used for function borrowing
//  * invoke function directly
//  * call -> pass the arguement as directly
//  * apply -> pass the arrguement as array of list
//  * 
//  * bind -> copy of the function -> when ever call it will invoked 
//  * 
//  */

const display = function (place, check, val1) {
    console.log(this.firstname, this.lastname, place, check, val1)
    return `${this.firstname}, ${this.lastname}, ${place}, ${check}`
}

display.call({firstname: 'demo', lastname: '1'}, 'trichy', 'test');
display.call({firstname: 'call', lastname: '1'}, 'checnnai');
display.apply({firstname: 'demo', lastname: '1'}, ['trichy', 'test']);

const disName = display.bind({firstname: 'demo', lastname: '1'}, 'trichy', 'test');
console.log(disName('val1'))


/**
 * Funtion borrowing 
 * call -> first arguement as refference in that function we dont declare any argument name 
 *         and then second and third ... arguements are we declare in params that will access directly we can pass n number of arguements 
 * 
 * apply -> first arguement as refference in that function we dont declare any argument name 
 *         and then second arguement as array of values or objects thats the only difference 
 * 
 * bind -> catching the value, copy of the function, 
 *         when ever we call the function it will invoked 
 */


// Pollyfill
Function.prototype.myBind = function (...args) {
    const obj = this;
    const params = args.slice(1);
    return function (...ards2) {
        obj.apply(args[0], [...params, ...ards2])
    }
}

const n = display.myBind({firstname: 'demo', lastname: '1'}, 'trichy', 'test');
console.log(n('Ch'));