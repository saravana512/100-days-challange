const pali = '1madamm';

let start = 0;
let maxLen = 1;

const checkPal = (s, i, j) => {
    while (i < j) {
        if(pali[i] !== pali[j]){
            return false
        }
        i++;
        j--;
    }
    return true;
}


for (let i = 0; i < pali.length; i++) {
    for (let j = i; j < pali.length; j++) {
       if (checkPal(pali, i, j) && (j-i+1) > maxLen) {
        start = i;
        maxLen = j-i+1
       }
    }    
}

console.log(pali.substring(start, start+maxLen))