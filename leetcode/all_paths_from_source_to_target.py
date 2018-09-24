class Solution:
    def allPathsSourceTarget(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[List[int]]
        """
        paths = [[len(graph) - 1]]
        final_paths = []
        while True:
            next_rnd_paths = []
            for path in paths:
                if path[-1] == 0:
                    final_paths.append(path)
                    continue
                fork_routes = [idx for idx, arr in enumerate(graph) if path[-1] in arr]
                for fork in fork_routes:
                    tmp = path[:]
                    tmp.append(fork)
                    next_rnd_paths.append(tmp)
            paths = next_rnd_paths
            if not next_rnd_paths:
                return list([pat[::-1] for pat in final_paths])



graph1 = [[1, 2], [3], [3], []]
graph2 = [[4,3,1],[3,2,4],[3],[4],[]]
allPathsFunction = Solution().allPathsSourceTarget

ans1 = allPathsFunction(graph1)
print(ans1)

ans2 = allPathsFunction(graph2)
print(ans2, 'expected:', '[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]')





# class Solution:
#     def allPathsSourceTarget(self, graph):
#         """
#         :type graph: List[List[int]]
#         :rtype: List[List[int]]
#         """
#         paths = [[len(graph)-1]]
#         while True:
#             next_paths = []
#             for pat in paths:
#                 target_node = pat[-1]
#                 for idx in [i for i, l in enumerate(graph) if target_node in l]:
#                     new_path = pat[:]
#                     new_path.append(idx)
#                     next_paths.append(new_path)
#             if next_paths:
#                 paths = next_paths
#             else:
#                 break
#         return list([list(reversed(arr)) for arr in paths if arr[-1] == 0])

# graph1 = [[1, 2], [3], [3], []]
# allPathsFunction = Solution().allPathsSourceTarget
# ans = allPathsFunction(graph1)
# print(ans)
