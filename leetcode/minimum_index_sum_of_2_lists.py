class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        if len(list1) > len(list2):
            list1, list2 = list2, list1
        d2 = {word:idx for idx, word in enumerate(list2)}
        d1 = {word:idx for idx, word in enumerate(list1)}
        common = d1.keys() & d2.keys()
        res = sorted(common, key=lambda x: d1[x] + d2[x])
        lo_score = d1[res[0]] + d2[res[0]]
        return list([r for r in res if ((d1[r] + d2[r]) == lo_score)])
