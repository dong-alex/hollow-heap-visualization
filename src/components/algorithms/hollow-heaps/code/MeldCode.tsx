import React from "react";

const code = `"""
return a heap containing all items in item-disjoint heaps h1 and h2

if h1 = None return h2
if h2 = None return h1

otherwise - unite their sets of trees and update the minimum node
"""
def meld(h1, h2):
    if not h1:
        return h2
    if not h2:
        return h1
    return link(h1, h2)`;

const MeldCode = () => {
  return (
    <code>
      <pre>{code}</pre>
    </code>
  );
};

export default MeldCode;
