class RLEIterator:

    def __init__(self, A):
        """
        :type A: List[int]
        """
        # re shape the RLE data into list of tuples [ (repeats, symbol)... ], &
        # reverse it so we can efficiently pop (since right side pop is more optimal in python)
        self.arr = list([(A[idx], A[idx+1]) for idx in range(0,len(A)-1, 2) if A[idx] > 0])[::-1]
        # we also discard zero valued repeat pairs since they're not useful

    def next(self, n):
        """
        :type n: int
        :rtype: int
        """
        if not self.arr:
            return -1
        while n >= 1:
            if not self.arr:
                return -1
            k, val = self.arr.pop()
            if n > k:
                n -= k
            else:
                if k == n:
                    return val
                else:
                    k -= n
                    self.arr.append((k, val))
                    return val




# Your RLEIterator object will be instantiated and called as such:
# obj = RLEIterator(A)
# param_1 = obj.next(n)
