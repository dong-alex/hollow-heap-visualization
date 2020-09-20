import React, { FunctionComponent } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const NavigationLayout: FunctionComponent<{}> = ({ children }) => {
  const bfColor = { backgroundColor: "#2E2E2E" };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router>
        <header>
          <MDBNavbar style={bfColor} dark expand="md" scrolling>
            <MDBNavbarBrand style={{ padding: "0.5rem 1rem" }}>
              <strong className="text-monospace">Hollow Heaps</strong>
            </MDBNavbarBrand>
          </MDBNavbar>
        </header>
      </Router>
      <div>{children}</div>
    </div>
  );
};

export default NavigationLayout;
