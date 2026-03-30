function factors(n) {
    var factors = [];
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(factors(24));
console.log(factors(11));
