import React, { FunctionComponent } from "react";
import TreeVisualizer from "./components/TreeVisualizer";
import "./App.css";
import { MDBContainer } from "mdbreact";
import styled from "styled-components";
import NavigationLayout from "./components/layout/NavigationLayout";
import Settings from "./components/Settings";

const Container = styled(MDBContainer)`
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const App: FunctionComponent<{}> = () => {
  return (
    <NavigationLayout>
      {/* Place the settings modifier here and pass it into the tree visualizer*/}
      <Container fluid>
        <TreeVisualizer />
      </Container>
    </NavigationLayout>
  );
};

export default App;
