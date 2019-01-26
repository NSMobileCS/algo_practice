from collections import defaultdict, deque


class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        self.freqs = defaultdict(int)
        self.res = []
        self.k = k
        for n in nums:
            self.freqs[n] += 1
            self.insertSorted(n, self.freqs[n])
        return [j[0] for j in self.res[-k:]]

    def insertSorted(self, num, freq):
        if not self.res:
            self.res.append((num, freq,))
        else:
            idx = self.binSearch(0, len(self.res), freq)
            self.res.insert(idx, (num, freq,))
        print(self.res)

    def binSearch(self, ldx, rdx, freq):
        if ldx == rdx:
            return ldx
        mdx = ldx + ((rdx - ldx) // 2)
        if self.res[mdx][1] == freq:
            return mdx
        elif self.res[mdx][1] > freq:
            return self.binSearch(mdx, rdx, freq)
        else:
            return self.binSearch(ldx, mdx, freq)

nums1, k1 = [1, 1, 1, 2, 2, 3], 2

print(nums1, k1)
S = Solution()
print(f"S.topKFrequent(nums1, k1) = {S.topKFrequent(nums1, k1)}, should have been [1,2]")

nums2, k2 = [3, 0, 1, 0], 1
print(nums2, k2)
print(f"S.topKFrequent(nums2, k2) = {S.topKFrequent(nums2, k2)}, should have been [0]")