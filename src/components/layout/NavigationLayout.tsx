import React, {
  useEffect,
  useState,
  FunctionComponent,
  useRef,
  useLayoutEffect,
} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const FixedNavbarExample: FunctionComponent<{}> = ({ children }) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const bgBlue = { backgroundColor: "#4285F4" };

  const onClick = () => {
    setCollapse(!collapse);
  };

  return (
    <div style={{ height: "100%", width: "100%", overflowY: "hidden" }}>
      <Router>
        <header>
          <MDBNavbar style={bgBlue} dark expand="md" scrolling>
            <MDBNavbarBrand href="/">
              <strong>Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={onClick} />
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Features</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Pricing</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Options</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">
                    <MDBIcon fab icon="instagram" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </Router>
      <div style={{ height: "100%" }}>{children}</div>
    </div>
  );
};

export default FixedNavbarExample;
