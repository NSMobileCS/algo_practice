class Solution(object):
    def reverseOnlyLetters(self, S):
        """
        :type S: str
        :rtype: str
        """
        arr = []
        letters = []
        indices = []
        for idx, ch in enumerate(S):
            if ch in 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz':
                letters.append(ch)
                indices.append(idx)
                arr.append('_')
            else:
                arr.append(ch)
        for jdx, ch in zip(indices, letters[::-1]):
            arr[jdx] = ch
        return ''.join(arr)
