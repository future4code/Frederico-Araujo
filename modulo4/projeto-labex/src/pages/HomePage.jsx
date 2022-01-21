import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

import Logo from "../midia/logo.png";
import { Button } from "@mui/material";

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

const LoginMenu = styled.div`
  background-color: rgb(209, 209, 209);
  background: linear-gradient(
    120deg,
    rgba(209, 209, 209, 1) 0%,
    rgba(120, 120, 120, 1) 46%,
    rgba(74, 74, 74, 1) 100%
  );
  width: 70%;
  height: 70vh;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 5px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .title {
    text-align: center;
    margin: 4px;
    img {
      width: 100%;
    }
  }

  .buttons {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .button {
      margin: 4px;

      Button {
        width: 100px;
      }
    }
  }
`;

const HomePage = () => {
  const history = useHistory();
  const params = useParams();

  const Trips = () => {
    history.push("/trips");
  };

  const Login = () => {
    history.push("/Login");
  };

  return (
    <Background>
      <LoginMenu>
        <div className="title">
          <img src={Logo} alt="Labe-x logo" />
        </div>
        <div className="buttons">
          <div className="button">
            <Button variant="contained" color="secondary" onClick={Login}>
              Login
            </Button>
          </div>
          <div className="button">
            <Button variant="contained" color="secondary" onClick={Trips}>
              Trips
            </Button>
          </div>
        </div>
      </LoginMenu>
    </Background>
  );
};

export default HomePage;
