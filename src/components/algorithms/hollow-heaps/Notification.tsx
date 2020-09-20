import React, { FunctionComponent } from "react";
import { MDBContainer } from "mdbreact";

const Notification: FunctionComponent<{}> = () => {
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
      <span className="red-text">
        Minimal setup - library can not support multiple parents
      </span>
      <span className="red-text">
        Tree SVG lack of viewbox flexibility - extends past container
      </span>
      <span>
        View all of the code{" "}
        <a
          href={"https://github.com/dong-alex/HollowHeaps"}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </span>
      <span>
        View the original paper{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://arxiv.org/abs/1510.06535"
        >
          here
        </a>
      </span>
    </MDBContainer>
  );
};

export default Notification;
