import React from "react";

const code = `"""
linking two nodes determines the smallest key.
breaking equals and links them together as such - returns the PARENT
"""
if v.key >= w.key:
  addChild(v, w)
  return w # returns the parent between the two nodes
else:
  addChild(w, v)
return v`;

const LinkCode = () => {
  return (
    <code>
      <pre>{code}</pre>
    </code>
  );
};

export default LinkCode;
