const nums = [1,2,3,4,1,2,5,6,8];

const hash = new Map();

for(let i=0; i<nums.length; i++){
    if (hash.has(nums[i])) {
        hash.set(nums[i], hash.get(nums[i])+1)
    } else {
        hash.set(nums[i], 1);
    }
}

console.log(hash);



// Problem 2 
const name = 'saravana';
const hashTheAlphabet = new Map();

for(let i=0; i<name.length; i++){
    if (hashTheAlphabet.has(name[i])) {
        hashTheAlphabet.set(name[i], hashTheAlphabet.get(name[i]) + 1);
    } else {
        hashTheAlphabet.set(name[i], 1);
    }
}

console.log(hashTheAlphabet);