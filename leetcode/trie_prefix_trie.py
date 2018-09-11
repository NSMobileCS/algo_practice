class TrieNode:
    def __init__(self, char, isTerm=False, initial_next=None):
        self.char = char
        self.isTerm = isTerm
        self.nexts = {} if not initial_next else {initial_next.char:initial_next}

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.trie = dict()


    def insert(self, word):
        """
        Inserts a word into the trie.
        :type word: str
        :rtype: void
        """
        if not word:
            return
        if word[0] in self.trie:
            cur = self.trie[word[0]]
        else:
            cur = TrieNode(word[0])
        for char in word[1:]:
            if char not in cur.nexts:
                cur.nexts[char] = TrieNode(char)
            cur = cur.nexts[char]
        cur.isTerm = True

    def search(self, word):
        """
        Returns if the word is in the trie.
        :type word: str
        :rtype: bool
        """
        if not word:
            return False
        if word[0] not in self.trie:
            return False
        cur = self.trie[word[0]]
        for char in word[1:]:
            if char not in cur.nexts:
                return False
            cur = cur.nexts[char]
        return (cur and cur.isTerm) == True

    def startsWith(self, prefix):
        """
        Returns if there is any word in the trie that starts with the given prefix.
        :type prefix: str
        :rtype: bool
        """
        if prefix[0] not in self.trie:
            return False
        cur = self.trie[prefix[0]]
        for char in prefix[1:]:
            if char not in cur.nexts:
                return False
            cur = cur.nexts[char]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(prefix)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
