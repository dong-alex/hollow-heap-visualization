import React, { FunctionComponent } from "react";
import HollowHeapVisualizer from "./components/algorithms/hollow-heaps/HollowHeapVisualizer";
import { MDBCol, MDBRow } from "mdbreact";
import NavigationLayout from "./components/layout/NavigationLayout";
import CodeSnippets from "./components/algorithms/hollow-heaps/CodeSnippets";
import "./App.css";

const App: FunctionComponent<{}> = () => {
  return (
    <NavigationLayout>
      <MDBRow>
        <MDBCol
          size="8"
          style={{
            padding: "0",
          }}
        >
          <HollowHeapVisualizer />
        </MDBCol>
        <MDBCol size="4" className="border-left border-dark">
          <CodeSnippets />
        </MDBCol>
      </MDBRow>
    </NavigationLayout>
  );
};

export default App;
