// Example 1:
// Input Format:  array[] = {3,1,2,5,3}
// Result: {3,4)
// Explanation: A = 3 , B = 4
// Since 3 is appearing twice and 4 is missing

// Example 2:
// Input Format: array[] = {3,1,2,5,4,6,7,5}
// Result: {5,8)
// Explanation: A = 5 , B = 8
// Since 5 is appearing twice and 8 is missing

const findMissingNumber = (arr) => {
    let repeatedNumber, missingNumber;

    // 1) Native Approach (Bruit Force Approach)
    // for (let i = 1; i <= arr.length; i++) {
    //     let cnt = 0;
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[j] === i) {
    //             cnt++;
    //         }
    //     }

    //     if (cnt === 2) repeatedNumber = i;
    //     if (cnt === 0) missingNumber = i;

    //     if (repeatedNumber && missingNumber) {
    //         break;
    //     }
    // }

    // if (repeatedNumber && missingNumber) {
    //     return [repeatedNumber, missingNumber];
    // }

    // // 2) Hasing Approah
    // const mapVal = new Map();
    // let min = arr[0],
    //     max = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (min > arr[i]) {
    //         min = arr[i];
    //     }
    //     if (max < arr[i]) {
    //         max = arr[i];
    //     }

    //     if (mapVal.get(arr[i]) === 0 || mapVal.get(arr[i])) {
    //         mapVal.set(arr[i], mapVal.get(arr[i]) + 1);
    //     } else {
    //         mapVal.set(arr[i], 1);
    //     }
    // }

    // for (let j = min; j <= max; j++) {
    //     const hashVal = mapVal.get(j);
    //     if (hashVal === 2) {
    //         repeatedNumber = j;
    //     }

    //     if (!hashVal) {
    //         missingNumber = j;
    //     }

    //     if (repeatedNumber && missingNumber) {
    //         break;
    //     }
    // }

    // if (!missingNumber) {
    //     missingNumber = max + 1;
    // }

    // return [repeatedNumber, missingNumber];

    // More optimised way
    const hashArr = new Array(arr.length + 1).fill(0);
    console.log(hashArr);

    for (let i = 0; i < arr.length; i++) {
        hashArr[arr[i]] += 1;
    }

    console.log(hashArr);

    for (let i = 1; i <= arr.length; i++) {
        if (hashArr[i] === 2) repeatedNumber = i;
        if (hashArr[i] === 0) missingNumber = i;

        if (repeatedNumber && missingNumber) {
            break;
        }
    }

    return [repeatedNumber, missingNumber];
};

console.log(findMissingNumber([3, 1, 2, 5, 3]), "Output -> 1");
console.log(findMissingNumber([3, 1, 2, 5, 4, 6, 7, 5]), "Output -> 2");
