'use strict';

const checkpalindrome = (param) => {
    const plength = param.length || 0;
    for (let i = 0; i < Math.round(plength/2); i++) {
        if (param[i]?.toLowerCase() !== param[plength-1-i]?.toLowerCase()) {
            return false;
        }
    }

    return true;
}

console.log(checkpalindrome('Madam')) // It is a plaindrome
console.log(checkpalindrome('Maam')) // It is a plaindrome
console.log(checkpalindrome('Mam')) // It is a plaindrome
console.log(checkpalindrome('Maddam')) // It is a plaindrome

console.log(checkpalindrome('Man')) // It is not a plaindrome
console.log(checkpalindrome('Nan')) // It is a plaindrome
