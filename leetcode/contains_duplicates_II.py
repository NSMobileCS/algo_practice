from collections import defaultdict

class Solution:
    def containsNearbyDuplicate(self, nums: 'List[int]', k: 'int') -> 'bool':
        val_pos = defaultdict(list)
        for idx, val in enumerate(nums):
            if val_pos[val]:
                for position in val_pos[val]:
                    if idx-position <= k:
                        return True
            val_pos[val].append(idx)

        return False


nums = [1,2,3,1]
k = 3

print(Solution().containsNearbyDuplicate(nums, k))
print('should be True')

nums2 = [1,2,3,1,2,3]
k2 = 2


print(Solution().containsNearbyDuplicate(nums2, k2))
print('should be false')




