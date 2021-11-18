function sieve(n) {
    let numbers = [];
    for (let i = 1; i < n + 1; i = i + 1) {
        numbers[i - 1] = i;
    }
    
    function array_map(f, arr) {
        for (let j = 0; j < arr.length; j = j + 1) {
            arr[j] = f(arr[j]);
        }
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
        array_map(x => x === null 
                    ? null 
                    : x === l
                    ? x
                    : x % l === 0 
                    ? null 
                    : x, numbers);
    }
    
    let primes = [];
    
    // m starts from 1 to remove 1 from the list of primes
    for (let m = 1; m < numbers.length; m = m + 1) {
        if (numbers[m] !== null) {
            primes[primes.length] = numbers[m];
        }
    }
    
   let sum = 0;
    
    for (let n = 0; n < primes.length; n = n + 1) {
        sum = sum + primes[n];
    }
    
    console.log(sum);
    // return sum;
}