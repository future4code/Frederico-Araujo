import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TextField, Button } from "@mui/material";

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

const Form = styled.div`
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
  height: 70vh;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 5px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    color: white;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplicationForm = () => {
  return (
    <Background>
      <Header />
      <Form>
        <h1>
          Cadastro
          <hr></hr>
        </h1>

        <Text>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="standard"
            margin="normal"
            type="text"
          />
          <TextField
            id="outlined-basic"
            label="Idade"
            variant="standard"
            margin="normal"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="standard"
            margin="normal"
            type="email"
          />
        </Text>
        <Button variant="contained" color="secondary">
          Enviar
        </Button>
      </Form>
    </Background>
  );
};

export default ApplicationForm;
