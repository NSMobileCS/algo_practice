from collections import defaultdict
import re
class Solution:
    def checkInclusion(self, s1, s2):
        if len(s1) > len(s2):
            return False
        target = defaultdict(int)
        target_length = 0
        letters = set('abcdefghijklmnopqrstuvwxyz')
        for ch in s1:
            if ch not in s2:
                return False
            target_length += 1
            target[ch] += 1
            letters.discard(ch)
        skip_str = ''.join(letters)
        if skip_str:
            skip_str = r'[' + skip_str + r']+'
            print(skip_str)
            skip_match = re.compile( skip_str )
        else:
            skip_match = None
        if skip_match:
            l2 = [ seg for seg in skip_match.split(s2) if len(seg) >= target_length ]
        else:
            l2 = [ s2 ]
        for target_seg in l2:
            target_temp = {k: v for k,v in target.items()}
            idx = 0
            for idx, char in enumerate(target_seg):
                target_temp[char] -= 1
                if target_temp[char] < 0:
                    if self.checkInclusion(s1, target_seg[idx:]):
                        return True
                    else:
                        break
            if all( map( lambda v: v == 0,  target_temp.values() ) ):
                return True
        return False
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """

S = Solution()
result = S.checkInclusion('adc', 'dcda')
print('result:> ', result)

result = S.checkInclusion('ab', 'eidbaooo')
print('result:> ', result)
