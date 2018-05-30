from collections import deque

class Codec:
  def __init__(self):
    self.n = 0
    self.urls = deque()

#   def base_encode(self, n):
#     s = []
#     while n:
#       n, r = divmod(n, self.BASE)
#       s.append(self.abcs[r])
#     return ''.join(reversed(s))

#   def base_decode(self, s):
#     n = 0
#     for ch in s:
#       n = n * self.BASE + self.cbas[ch]
#     return n


  def encode(self, longUrl):
    """Encodes a URL to a shortened URL.

    :type longUrl: str
    :rtype: str
    """
    self.urls.append(longUrl)
    self.n += 1
    # s = self.base_encode(self.n)
    # print(s)
    return 'http://tinyurl.com/{}'.format(self.n)


  def decode(self, shortUrl):
    """Decodes a shortened URL to its original URL.

    :type shortUrl: str
    :rtype: str
    """
    return self.urls[int(shortUrl[19:])-1]
    # return self.urls[self.base_decode(shortUrl[19:])-1]


