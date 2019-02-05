# somewhat naive method to find repeating cycles in 'unit fraction' of numbers
# take the reciprocal 1/n & see if it has a repeating cycle
# motivation is looking for the longest such repeating cycle for any n < 1000
# e.g. for 1/6 == 0.1666.. == 0.1(6) where (6) is the cycle, len=1


# idea: could check for 8 digit cycles, 9 digit cycles, etc...
# if find, look for bigger
#       no real guarantee of finding biggest,
#       but prob feasible in practice.


# generate recips
#   discard part before decimal, multiply by 10**9, & remove decimal
#       should produce string of about 20 digits
#           check if first 8-10(+) digits repeat

import decimal
decimal.getcontext().prec = 96 # set precision to 64 places



def chk_cycle_length(k, lens=(7, 8, 9, 10, 11)):
    n = decimal.Decimal(1 / k)
    s = ''.join([str(i) for i in n.as_tuple().digits])
    if len(s) < lens[0]:
        return
    res = None
    for le in lens:
        if le * 3 > len(s):
            break
        a, b = s[:le], s[le:]
        if (a in b) and (a in b[le:]):
            res = le
    return res



recips = [(7, 6,)]     # n: len(cycle)
for k in range(9, 1000):
    c_len = chk_cycle_length(k)
    if c_len:
        recips.append((k, c_len,))



9

