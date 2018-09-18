def isPal(n):
    s = str(n)
    i = len(s) // 2
    a = s[:i]
    # if length is odd number, i moves rightward 1 place
    i += len(s) % 2
    b = s[i:]
    return a == b[::-1]


