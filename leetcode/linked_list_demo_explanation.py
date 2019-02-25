## demo to help explain a concept. see discussion at:
## https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/242309/please-help-me-understand-this-point/

class LLNode:
    def __init__(self, val):
        self.val = val
        self.next = None

    def __str__(self):
        n = self.next
        s = f"(id: {id(self)} val: {self.val})"
        while n:
            s += " -> "
            s += f"(id: {id(n)} val: {n.val})"
            n = n.next
        return s

head1 = LLNode(2)
head1.next = LLNode(4)
head1.next.next = LLNode(5) ## see below

head2 = LLNode(1)
head2.next = LLNode(3)
head2.next.next = LLNode(5) ## same value, but
        ## not actually a common element (see ID in printout)

print('2 lists:')
print(head1)
print(head2)

common_element = LLNode(7)

head2.next.next.next = common_element
head1.next.next.next = common_element

head1.next.next.next.next = LLNode(99)



print('now they merge on \'common_element\' node: ')
print(head1)
print(head2)

