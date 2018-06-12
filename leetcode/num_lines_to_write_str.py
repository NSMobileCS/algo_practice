
class Solution:
    def numberOfLines(self, widths, S):
        """
        :type widths: List[int]
        :type S: str
        :rtype: List[int]
        """
        d = dict(zip('abcdefghijklmnopqrstuvwxyz', widths))
        l = [d[char] for char in S]
        nlines = 1
        line = 100
        while l:
            term = l.pop()
            if term > line:
                nlines += 1
                line = 100 - term
            else:
                line -= term
            term = l.pop()
        return [nlines, 100-line]


