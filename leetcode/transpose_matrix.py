# class Solution:
#     def transpose(self, A):
#         nCols = len(A[0]) # num col's in A
#         nRows = len(A) # num row's in A
#         outp = []
#         for jdx in range(nCols):
#             temp = []
#             for idx in range(nRows):
#                 temp.append(A[idx][jdx])
#             outp.append(temp)
#         return outp
#         """
#         :type A: List[List[int]]
#         :rtype: List[List[int]]
#         """

class Solution:
    def transpose(self, A):
        return list([ list([ A[idx][jdx] for idx in range(len(A)) ]) for jdx in range(len(A[0])) ])
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
# is list comprehension faster?

