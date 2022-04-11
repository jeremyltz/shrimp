import React from "react";
import styled from "@emotion/styled";

const App = ({ className }) => {
  return (
    <div className={className}>
      <span>Asuh</span>
      <span>&#x1F990;</span>
    </div>
  );
};

const styledApp = styled(App)``;
export default styledApp;
