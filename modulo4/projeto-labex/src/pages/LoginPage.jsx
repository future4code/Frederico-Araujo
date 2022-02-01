import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import Header from "../components/Header";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

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
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  h3 {
    color: white;
  }
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
  margin-top: 40px;
  max-width: 1000px;
  min-height: 500px;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 5px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  h1 {
    color: white;
  }
`;
const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email: user,
    password: password,
  };
  const history = useHistory();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const getUser = (e) => {
    setUser(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    const response = await axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/login",
      body
    );
    try {
      window.localStorage.setItem("token", response.data.token);
      history.push("/admin/trips");
    } catch {
      alert(response.error);
    }
  };

  console.log(body);
  return (
    <div>
      <Header />
      <Background>
        <LoginMenu>
          <h1>
            Área do Administrador
            <hr />
          </h1>
          <TextField
            id="outlined-basic"
            label="Usuário"
            variant="standard"
            margin="normal"
            type="text"
            value={user}
            onChange={getUser}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="standard"
            margin="normal"
            type="password"
            value={password}
            onChange={getPassword}
          />
          <Button variant="contained" color="secondary" onClick={login}>
            Conectar
          </Button>
        </LoginMenu>
      </Background>
    </div>
  );
};

export default LoginPage;
