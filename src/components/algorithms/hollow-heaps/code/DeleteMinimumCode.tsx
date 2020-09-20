import React from "react";

const code = `"""
return a heap formed deleting e, assumed to be in h, from h

keep track of roots as they are destroyed and linked.

use list L of hollow roots - singly linked by next pointers
"""
def delete(e, h):
  global maxRank
  global A
  # hollow out the node associated
  e.node.item = None
  e.node = None

  # non minimum deletion - don't have to do anything more
  if h.item: return h
  # while L not empty - all the potential nodes to check
  maxRank = 0
  
  # sever the ties with next node
  h.next = None
  while h:
      w = h.child
      v = h
      h = h.next
      while w:
          u = w
          w = w.next

          # u = w and w is the next node ( u -> w)
          if not u.item:
              # no extra parent - move to top and set 'u' to be child
              if not u.ep:
                  # case (a)
                  u.next = h
                  h = u
              # there is an extra parent - assign to ep instead
              else:
                  # case (b)
                  if u.ep == v: w = None
                  # case (c)
                  else: u.next = None

                  # clean up the ep
                  u.ep = None
          # rank the lists - node is FULL
          # case(d)
          else:
              while A[u.rank]:
                  u = link(u, A[u.rank])
                  A[u.rank] = None
                  u.rank += 1
              A[u.rank] = u
              if u.rank > maxRank:
                  maxRank = u.rank
      del v
  # empty A and link full roots via unranked until there is at most one
  for i in range(0, maxRank + 1):
      if A[i]:
          if h:
              h = link(h, A[i])
          else:
              h = A[i]                
          A[i] = None
  return h`;

const DeleteMinimumCode = () => {
  return (
    <code>
      <pre>{code}</pre>
    </code>
  );
};

export default DeleteMinimumCode;
