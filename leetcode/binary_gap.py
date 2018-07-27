import re
class Solution:
    def binaryGap(self, N):
        """
        :type N: int
        :rtype: int
        """
        if N < 3:
            return 0
        # get bin rep as str
        bs = bin(N)[2:]
        # get rid of trailing zeroes
        bs = re.sub(r'0{1,}$', '', bs)
        # get length of gaps w/ re method
        bin_gaps = [ len(s) for s in re.split(r'1{1,}', bs) if len(s) > 0 ]
        if len(bin_gaps) > 0:
            return max(bin_gaps) + 1
        else:
            if '11' in bs:
                return 1
            return 0


