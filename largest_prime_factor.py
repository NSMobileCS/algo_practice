import sys

def largest_prime_factor(n):
    max_factor = 1
    prime_stream = gen_primes()
    while n > 1:
        p = next(prime_stream)
        while n % p == 0:
            n /= p
            if p > max_factor:
                max_factor = p
    return max_factor


def prime_factorize(n):
    res = dict()
    prime_stream = gen_primes()
    while n > 1:
        p = next(prime_stream)
        matches = 0
        while n % p == 0:
            matches += 1
            n /= p
        if matches:
            res[p] = matches
    return res

# generator function for primes
def gen_primes():
    primes = [2]
    n = 2
    yield 2
    while True:
        n += 1
        seems_prime = True
        for p in primes:
            if n % p == 0:
                seems_prime = False
                break
        if seems_prime:
            primes.append(n)
            yield n


if len(sys.argv) > 1:
    val = int(sys.argv[1])
    print(val)
    print('largest prime factor: ', largest_prime_factor(val))
