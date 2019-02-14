from collections import defaultdict

class Solution:
    def containsNearbyDuplicate(self, nums: 'List[int]', k: 'int') -> 'bool':
        val_pos = defaultdict(list)
        for idx, val in enumerate(nums):
            val_pos[val].append(idx)
            if len(val_pos[val]) > 1:
                for position in val_pos[val][:-1]:
                    if abs(idx-position) <= k:
                        return True
        return False


nums = [1,2,3,1]
k = 3

print(Solution().containsNearbyDuplicate(nums, k))
print('should be True')

nums2 = [1,2,3,1,2,3]
k2 = 2


print(Solution().containsNearbyDuplicate(nums2, k2))
print('should be false')




