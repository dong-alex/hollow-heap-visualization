import React, { useState, useEffect, FunctionComponent } from "react";
import { MDBContainer } from "mdbreact";
import styled from "styled-components";
import { TranslationType } from "../types";

const Container = styled(MDBContainer)`
  border: 2px black solid;
`;

type SettingsProps = {
  translation: TranslationType;
  onResetTranslation: any;
};

const Settings: FunctionComponent<SettingsProps> = ({
  onResetTranslation,
  translation,
}) => {
  return (
    <Container fluid>
      <button onClick={onResetTranslation}>Reset to Center</button>
    </Container>
  );
};

export default Settings;
