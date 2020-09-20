import React from "react";

const code = `"""
creates a new node with the item 'e' and key 'k'
"""
def makeNode(e, k):
    u = HeapNode()
    u.item = e
    u.key = k

    e.node = u
    return u`;

const MakeNodeCode = () => {
  return (
    <code>
      <pre>{code}</pre>
    </code>
  );
};

export default MakeNodeCode;
