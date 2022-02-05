function sieve(n) {
    let numbers = [];
    for (let i = 1; i < n + 1; i++) {
        numbers[i - 1] = i;
    }
    
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return n > 1;
    }
    
    let last_mult = Math.floor(Math.sqrt(n));
    
    // to find the last prime multiple to divide through by
    for (let k = last_mult; k > 0; k--) {
        if (is_prime(k) || k === 1) {
            last_mult = k;
            break;
        }
    }
    
    // start with the first prime: 2
    for (let l = 2; l < last_mult + 1; l++) {
        numbers = numbers.map(x => x === null 
                    ? null 
                    : x === l
                    ? x
                    : x % l === 0 
                    ? null 
                    : x);
    }
    
    let prime = null;
    
    // to find the last prime number
    for (let m = numbers.length - 1; m > 1; m--) {
        if (numbers[m] !== null) {
            prime = numbers[m];
            break;
        }
    }
  
    return prime;
}
