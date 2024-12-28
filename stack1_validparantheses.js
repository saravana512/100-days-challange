/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const arrLength = s.length || 0;
    if (arrLength === 0) return false;
    if (arrLength % 2 !== 0) return false;
    for (let i = 0; i < arrLength; i++) {
        if (i === 0) {
            stack.push(s[i]);
            continue;
        }
        if(['(', '{', '['].includes(s[i])) stack.push(s[i]);
        else if (
            (s[i] ===  ')' && stack[stack.length - 1] === '(') ||
            (s[i] ===  '}' && stack[stack.length - 1] === '{') ||
            (s[i] ===  ']' && stack[stack.length - 1] === '[')
        ) stack.pop();
        else return false;
    }

    if(stack.length) return false;
    return true;
};

console.log(isValid('()'))
console.log(isValid('(('))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))