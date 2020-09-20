// external data is manipulated and represented in ReactD3Tree form
import React, {
  useState,
  useCallback,
  FunctionComponent,
  useEffect,
} from "react";
import Tree from "react-d3-tree";
import HollowHeapSettings from "./HollowHeapSettings";
import useHollowHeap from "./useHollowHeap";
import Notification from "./Notification";

type TranslationType = {
  x: number;
  y: number;
};

const TreeVisualizer: FunctionComponent<{}> = () => {
  const { tree, createHeap, traverseHeap, onDeleteMinimum } = useHollowHeap();
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [translation, setTranslation] = useState<TranslationType>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    createHeap();
    traverseHeap();
    // eslint-disable-next-line
  }, []);

  // initial render to set loaded to true - then use the current.ref
  // https://twitter.com/dan_abramov/status/1093497348913803265
  const containerRef = useCallback((node) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setWindowWidth(width);
      setWindowHeight(height);
    }
  }, []);

  useEffect(() => {
    centerTree();
    // eslint-disable-next-line
  }, [windowWidth, windowHeight]);

  const centerTree = () => {
    const translate = { x: windowWidth / 2, y: windowHeight / 7 };
    setTranslation(translate);
  };

  return (
    tree.length > 0 && (
      <div style={{ height: "100vh" }} ref={containerRef}>
        <HollowHeapSettings onDeleteMinimum={onDeleteMinimum} />
        <Tree
          data={tree}
          orientation="vertical"
          pathFunc="straight"
          translate={translation}
          collapsible={false}
        />
        <Notification />
      </div>
    )
  );
};

export default TreeVisualizer;
