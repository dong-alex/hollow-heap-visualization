import React, { FunctionComponent } from "react";
import { MDBBtn, MDBContainer } from "mdbreact";

type HollowHeapSettingsProps = {
  onDeleteMinimum: any;
};

const HollowHeapSettings: FunctionComponent<HollowHeapSettingsProps> = ({
  onDeleteMinimum,
}) => {
  return (
    <MDBContainer
      fluid
      className="text-monospace border border-dark"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <h3 className="text-center">Settings</h3>
      <span>Move around the tree and view deletions</span>
      <MDBBtn rounded color="dark" onClick={onDeleteMinimum}>
        Delete Minimum Node
      </MDBBtn>
    </MDBContainer>
  );
};

export default HollowHeapSettings;
