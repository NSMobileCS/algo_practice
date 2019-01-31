class Solution:
    def sortArrayByParityII(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        wrong_odds = []
        wrong_evens = []
        for idx, elem in enumerate(A):
            if idx % 2 == 0: #on even index
                if elem % 2 == 1:
                    wrong_odds.append((idx, elem,))
            else: # on odd index
                if elem % 2 == 0:
                    wrong_evens.append((idx, elem,))
        for (wo_dx, wo_elem), (we_dx, we_elem) in zip(wrong_odds, wrong_evens):
            A[wo_dx] = we_elem
            A[we_dx] = wo_elem
        return A


