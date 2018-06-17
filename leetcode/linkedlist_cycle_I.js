let hasCycle = (head) => {
  if (!head || !head.next) return false;
  let r1 = head;
  let r2 = r1.next;
  while (r2 = r2.next) {
    if (!r2.next) break;
    r1 = r1.next;
    r2 = r2.next;
    if (r1 === r2) return true;
  }
  return (r1 === r2);
};
