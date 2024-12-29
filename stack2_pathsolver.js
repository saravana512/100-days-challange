
const path = '/../'
const path1 = '/home/user/Documents/../Pictures'
const stack = [];
const paths = path.split('/');
for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '..') {
        stack.pop();
    }
    if (paths[i] !== '..' && paths[i] !== '.' && paths[i]) {
        stack.push('/' + paths[i]);
    }

}

console.log(stack.length > 0 ? stack.join('') : '/');