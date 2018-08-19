import re

class Solution:
    def fractionAddition(self, expression):
        """
        :type expression: str
        :rtype: str
        """
        # convert subtractions to addition of inverse so we can split on plus sign
        expression = re.sub(r'(\d{1})-', r'\1+-', expression)
        terms = []
        denoms = set()
        for term in expression.split('+'):
            a, b = term.split('/')
            a, b = int(a), int(b)
            terms.append([a,b])
            denoms.add(b)
        LCM = 1
        for d in denoms:
            LCM *= d
        result = [0, 1]
        print(LCM)
        for term in terms:
            if result[1] < LCM:
                x = LCM // result[1]
                result[0] *= x
                result[1] *= x
            if term[1] < LCM:
                x = LCM // term[1]
                term[0] *= x
                term[1] *= x
            result[0] += term[0]
        if result[0] == 0:
            result[1] = 1
        for rfactor in range(max(min(result), max(denoms)), 1, -1):
            if (result[0] % rfactor == 0) and (result[1] % rfactor == 0):
                result[0] //= rfactor
                result[1] //= rfactor
        return str(int(result[0])) + "/" + str(int(result[1]))


fAdd = Solution().fractionAddition

inputs = [
    "-1/2+1/2",
    "-1/2+1/2+1/3",
    "1/3-1/2",
    "5/3+1/3",
    ]

print("------")

for ip in inputs:
    print("------")
    print(ip)
    print(fAdd(ip))
    print("------")