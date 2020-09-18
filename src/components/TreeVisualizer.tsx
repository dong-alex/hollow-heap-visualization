import React, {
  useState,
  useRef,
  FunctionComponent,
  useLayoutEffect,
  useEffect,
} from "react";
import Tree from "react-d3-tree";
import Settings from "./Settings";

type TranslationType = {
  x: number;
  y: number;
};

const myTreeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C",
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C",
        },
        children: [{ name: "Test Level 3: A" }],
      },
      {
        name: "Level 2: B",
      },
    ],
  },
];

const TreeVisualizer: FunctionComponent<{}> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [translation, setTranslation] = useState<TranslationType>({
    x: 0,
    y: 0,
  });
  const [initialTranslation, setInitialTranslation] = useState<TranslationType>(
    {
      x: 0,
      y: 0,
    }
  );

  const updateDimensions = () => {
    console.log("Update dimensions");
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const centerTree = () => {
    const translate = { x: windowWidth / 2, y: windowHeight / 7 };
    setTranslation(translate);
  };

  useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => updateDimensions(), 100);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  useLayoutEffect(() => {
    centerTree();
  }, []);

  const handleUpdate = (event: any) => {
    setTranslation(event.translate);
  };

  const handleResetTranslation = (event: any) => {
    centerTree();
  };

  return (
    <div style={{ height: "100%", width: "100%" }} ref={containerRef}>
      <Settings
        translation={translation}
        onResetTranslation={handleResetTranslation}
      />
      <Tree
        data={myTreeData}
        orientation="vertical"
        pathFunc="straight"
        translate={translation}
        collapsible={false}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default TreeVisualizer;
