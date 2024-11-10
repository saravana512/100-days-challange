const name = 'name1';

function reverseString(str) {
    let reversedString = '';

    for (let index = str.length-1; index >=0; index--) {
        reversedString += str[index]
    }

    return reversedString;
}

console.log(reverseString(name))