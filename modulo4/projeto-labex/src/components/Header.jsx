import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import Logo from "../midia/logo-white.png";

const HeaderStyle = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 15vh;
  background-color: black;
  box-shadow: 0px 2px 7px 0px rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 12vh;
    cursor: pointer;
  }
`;
const Header = () => {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };
  return (
    <HeaderStyle>
      <img src={Logo} alt="Labe-x logo" onClick={home} />
    </HeaderStyle>
  );
};

export default Header;
