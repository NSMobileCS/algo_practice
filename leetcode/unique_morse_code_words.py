MORSE_TABLE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]


class Solution:
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        xformed_strs = set()
        for word in words:
             # ord('a') == 97
            morse_str = ''.join([MORSE_TABLE[ord(char) - 97] for char in word])
            xformed_strs.add(morse_str)
        return len(xformed_strs)

uniqueMorseRep = Solution().uniqueMorseRepresentations

arr = ["gin", "zen", "gig", "msg"]
print(uniqueMorseRep(arr))
