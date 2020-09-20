import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { DeleteMinimumCode, LinkCode, MakeNodeCode, MeldCode } from "./code";
import styled from "styled-components";

const StyledNav = styled(MDBNav)`
  margin-top: 1rem;
`;

const StyledTabPane = styled(MDBTabPane)`
  height: 100%;
  background-color: #eeeeee;
`;

const CodeSnippets = () => {
  const [activeItem, setActiveItem] = useState<string>("1");

  const handleTabToggle = (tab: string) => (e: any) => {
    if (activeItem !== tab) {
      setActiveItem(tab);
    }
  };

  return (
    <BrowserRouter>
      <StyledNav className="text-monospace nav-tabs">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "1"}
            onClick={handleTabToggle("1")}
            role="tab"
          >
            Delete Minimum
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "2"}
            onClick={handleTabToggle("2")}
            role="tab"
          >
            Make Node
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "3"}
            onClick={handleTabToggle("3")}
            role="tab"
          >
            Meld
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "4"}
            onClick={handleTabToggle("4")}
            role="tab"
          >
            Link Nodes
          </MDBNavLink>
        </MDBNavItem>
      </StyledNav>
      <MDBTabContent activeItem={activeItem}>
        <StyledTabPane tabId="1" role="tabpanel">
          <DeleteMinimumCode />
        </StyledTabPane>
        <StyledTabPane tabId="2" role="tabpanel">
          <MakeNodeCode />
        </StyledTabPane>
        <StyledTabPane tabId="3" role="tabpanel">
          <MeldCode />
        </StyledTabPane>
        <StyledTabPane tabId="4" role="tabpanel">
          <LinkCode />
        </StyledTabPane>
      </MDBTabContent>
    </BrowserRouter>
  );
};

export default CodeSnippets;
