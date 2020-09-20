import { useState } from "react";
import { ReactD3TreeItem } from "react-d3-tree";
import { HollowHeap } from "./implementation/HollowHeap";

const useHollowHeap = () => {
  const [heap, setHeap] = useState<HollowHeap>(new HollowHeap());
  const [tree, setTree] = useState<ReactD3TreeItem[]>([]);
  const references: any = {};

  const testData: number[] = [14, 11, 5, 9, 0, 8, 10, 3, 6, 12, 13, 4];

  // try to render the proper tree
  const createHeap = () => {
    testData.forEach((value: number) => {
      references[value] = heap.insert(value, value);
    });
    setHeap(heap);
  };

  // print the items in the heap in somewhat level by level order
  // generate the tree based on the nodes
  let visited = new Set();

  const traverseHeap = () => {
    let initialParent;
    let queue: any[] = [{ root: heap.root, parent: null }];
    while (queue.length > 0) {
      let isHead: boolean = false;
      let { root, parent } = queue.shift();
      while (root) {
        let treeObject: ReactD3TreeItem = {
          name: root.key.toString(),
          attributes: {
            rank: root.rank.toString(),
          },
          // include root-> next and root-> child
          children: [],
        };

        if (parent) {
          parent.children.push(treeObject);
        } else {
          isHead = true;
          parent = treeObject;
          initialParent = treeObject;
        }

        if (root.child) {
          visited.add(root.child);
          queue.push({ root: root.child, parent: treeObject });
        }

        root = !isHead ? root.next : null;
      }
    }

    setTree([initialParent]);
  };

  const handleDeleteMinimum = () => {
    // last node - should not be trying to delete the minimum
    if (heap.root.next || heap.root.child) {
      heap.deleteMinimum();
      traverseHeap();
    }
  };

  return {
    heap,
    tree,
    createHeap,
    traverseHeap,
    onDeleteMinimum: handleDeleteMinimum,
  };
};

export default useHollowHeap;
