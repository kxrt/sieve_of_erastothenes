function sieve(n) {
    let numbers = [];
    for (let i = 1; i < n + 1; i = i + 1) {
        numbers[i - 1] = i;
    }
    
    function is_prime(n) {
        if (n <= 1) { return false; }
        function helper(n, a) {
            return n % a === 0 
                ? n === a 
                    ? true 
                    : false
                : helper(n, a + 1);
        }
        return helper(n, 2);
    }
    let last_mult = Math.floor(Math.sqrt(n));
    
    // to find the last prime multiple to divide through by
    for (let k = last_mult; k > 0; k = k - 1) {
        if (is_prime(k) || k === 1) {
            last_mult = k;
            break;
        }
    }
    
    // start with the first prime: 2
    for (let l = 2; l < last_mult + 1; l = l + 1) {
        numbers = numbers.map(x => x === null 
                    ? null 
                    : x === l
                    ? x
                    : x % l === 0 
                    ? null 
                    : x);
    }
    
    let prime = null;
    
    // m starts from 1 to remove 1 from the list of primes
    for (let m = numbers.length - 1; m < 1; m = m - 1) {
        if (numbers[m] !== null) {
            prime = numbers[m];
          break;
        }
    }
  
    console.log(prime);
    // return prime;
}
