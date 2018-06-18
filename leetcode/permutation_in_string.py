class Solution:
    def checkInclusion(self, s1, s2):
        if len(s1) > len(s2):
            return False
        for ch s1:
            if ch not in s2:
                return False
        one_set = set(s1)
        for idx in range(len(s2)-len(s1)):
            if set(s2[idx:idx+len(s1)]) == one_set:
                return True
        return False
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """

