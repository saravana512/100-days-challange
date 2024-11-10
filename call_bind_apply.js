'use strict';

// call

// Function borrowing 

// 1) Method 1
const name = {
    firstname: 'saro',
    lastname: 'kum',
    display: function () {
        console.log(`The full name is ${this.firstname} ${this.lastname}`)
    }
}

name.display()

const name1 = {
    firstname: 'saro1',
    lastname: 'kum2'
}

name.display.call(name1)

//  Method 2 
const name3 = {
    firstname: 'saro4',
    lastname: 'kum4'
}

const display = function (age, pincode) {
    console.log(this.firstname, this.lastname, age)
}

const name4 = {
    firstname: 'saro5',
    lastname: 'kum5'
}

display.call(name3, 33, '623311');
display.call(name4, 34, '677777');
display.apply(name4, [35, '677777']);

const displayName = display.bind(name4, 34, '677777');
console.log(displayName);
console.log(displayName);




/**
 * call, apply used for function borrowing
 * invoke function directly
 * call -> pass the arguement as directly
 * apply -> pass the arrguement as array of list
 * 
 * bind -> copy of the function -> when ever call it will invoked 
 * 
 */

