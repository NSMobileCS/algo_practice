l = [1,2,1,2,1,2,1,2,1,2,1,2,1,2]

print(l)

def iSums(arr):
  if len(arr) < 10:
    raise Exception("EXCEPTION: FATAL, FATAL AF~!")
  l = list(range(0,len(arr),10))[::-1]
  print(l)
  id x = l.pop()
  jdx = len(arr)
  while idx:
    print(idx,jdx)
    arr = arr[:jdx] + [sum([i for i in arr[idx:jdx]])] + arr[jdx:]
    jdx = idx
    idx = l.pop()
  return arr


print(iSums(l))
