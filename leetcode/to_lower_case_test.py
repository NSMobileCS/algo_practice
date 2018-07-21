# doing it the 'hard way'
# will compare w/ trivial .lower() solution
# see if built in is actually faster

class Solution_1:
    def toLowerCase(self, s):
        outp = ''
        for ch in s:
            n = ord(ch)
            if 91 > n > 64:
                outp += chr(n + 32)
            else:
                outp += ch
        return outp
        """
        :type str: str
        :rtype: str
        """
        # leetcode runtime: 32 ms.


class Solution_2:
    def toLowerCase(self, s):
        buffer = list(s)
        idx = 0
        while idx < len(buffer):
            n = ord(buffer[idx])
            if 91 > n > 64:
                buffer[idx] = chr(n + 32)
            idx += 1
        return ''.join(buffer)
        """
        :type str: str
        :rtype: str
        """
        # leetcode runtime: 36ms.


# vs..

class Solution_3:
    def toLowerCase(self, s):
        return s.lower()
        # leetcode runtime: 36ms.