# hollow-heap-visualization
Visualize how a hollow heap works. Delete minimum nodes and view how the tree changes. Code snippets of a few functions are given in python but all of it can be found in this repo [here](https://github.com/dong-alex/HollowHeaps)

Time complexity between the normal binary heap and the hollow heap is O(1) lookup (minimum), O(logn) deletion. The difference is where you insert new items which is O(log n) in a binary heap and O(1) in a hollow heap otherwise.

During runtime, heapq still runs faster than a pythonic implementation due to its C++ implemention. Consider using a hollow heap for algorithms that requires priority queues such as Djikstras, and an implementation in C++.

Issues:
- With the given limitations to the render library for the D3 trees, connections between multiple parents will not be working properly. Note the duplicate values rendered as they are the ones that should have been connected from other nodes.
- Current implemntation only contains the deletion of minimum nodes. The viewbox of the SVG is not manageable.
