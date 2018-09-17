def isPal(n):
    s = str(n)
    i = len(s) // 2
    a = s[:i]
    i += len(s) % 2
    b = s[i:]
    return a == b[::-1]


