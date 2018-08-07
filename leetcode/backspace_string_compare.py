import re

pat_backspaced = re.compile(r'.{1}#{1}')

class Solution:
    def backspaceCompare(self, S, T):
        """
        type S: str
        type T: str
        rtype: bool
        """
        return self.process(S) == self.process(T)

    def process(self, s):
        outp = ''
        skip = 0
        for char in s[::-1]:
            if char == r"#":
                skip += 1
                continue
            else:
                if skip:
                    skip -= 1
                else:
                    outp += char
        return outp[::-1]

    def render(self, s):
        s = re.sub(r'^#{1,}', '', s)
        match = pat_backspaced.search(s)
        while match:
            print(s)
            s = s[:match.start()] + s[match.end()+1:]
            match = pat_backspaced.search(s)
        s = re.sub(r'^#{1,}', '', s)
        return s

b_compare = Solution().backspaceCompare

S = "a##c"
T = "#a#c"
print(b_compare(S, T))


