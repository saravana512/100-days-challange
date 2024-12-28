const primes = [2];

/**
 * @param {number} n
 * @return {void}
 */
const generatePrimes = (n) => {
    let currentNumber = 3;

    for (let number = 1; number < n; number += 1) {
        for (;;) {
            let isPrime = true;

            for (const prime of primes) {
                if (currentNumber % prime === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primes.push(currentNumber);
                break;
            }

            currentNumber += 2;
        }
    }
};
console.log(primes);
generatePrimes(100);
console.log(primes);
