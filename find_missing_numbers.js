const arr = [1, 10, 5, 2, 7];
const missingNumbers = findMissingNumbers(arr);
function findMissingNumbers(arr) {
    let min = arr[0], max = arr[0]
    const arrnew = new Map();
    for (const element of arr) {
        if (!(element > min)) {
            min = element;
        } else if(element > max){
            max = element;
        }
        arrnew.set(element,  true)
    }

    const outputarr = [];
    for (let index = min; index <= max; index++) {
        if(!arrnew.has(index)){
            outputarr.push(index)
        }
    }
    
    return outputarr;

}
console.log(missingNumbers); // Output: [3, 4, 6, 8, 9]
