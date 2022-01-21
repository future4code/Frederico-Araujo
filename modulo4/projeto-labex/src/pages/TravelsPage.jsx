import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background: rgb(43, 60, 140);
  background: linear-gradient(
    0deg,
    rgba(43, 60, 140, 1) 0%,
    rgba(93, 9, 121, 1) 43%,
    rgba(68, 6, 154, 1) 100%
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TravelsPage = () => {
  return (
    <Background>
      <p>Travel</p>
    </Background>
  );
};

export default TravelsPage;
