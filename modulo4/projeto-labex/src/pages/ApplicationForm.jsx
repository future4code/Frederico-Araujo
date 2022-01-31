import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplicationForm = () => {
  useEffect(() => {
    document.title = "Formulário de cadastro";
  }, []);
  const params = useParams();

  const [body, setBody] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const getName = (e) => {
    setBody({ ...body, name: e.target.value });
  };
  const getAge = (e) => {
    setBody({ ...body, age: e.target.value });
  };
  const getApplicationText = (e) => {
    setBody({ ...body, applicationText: e.target.value });
  };
  const getProfession = (e) => {
    setBody({ ...body, profession: e.target.value });
  };
  const getCountry = (e) => {
    setBody({ ...body, country: e.target.value });
  };

  const applyToTrip = async () => {
    if (
      body.name === "" ||
      body.age === "" ||
      body.applicationText === "" ||
      body.profession === "" ||
      body.country === ""
    ) {
      alert("Preencha todos os campos!");
    } else {
      const response = await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trips/${params.id}/apply`,
        body
      );
      try {
        alert("Inscrição feita com sucesso!");
        setBody({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
        });
      } catch {
        alert(response.error);
      }
    }
  };

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
            value={body.name}
            onChange={getName}
          />
          <TextField
            id="outlined-basic"
            label="Idade"
            variant="standard"
            margin="normal"
            type="number"
            value={body.age}
            onChange={getAge}
          />
          <TextField
            id="outlined-basic"
            label="Justificativa"
            variant="standard"
            margin="normal"
            type="text"
            value={body.applicationText}
            onChange={getApplicationText}
          />
          <TextField
            id="outlined-basic"
            label="Profissão"
            variant="standard"
            margin="normal"
            type="text"
            value={body.profession}
            onChange={getProfession}
          />
          <TextField
            id="outlined-basic"
            label="País"
            variant="standard"
            margin="normal"
            type="text"
            value={body.country}
            onChange={getCountry}
          />
        </Text>
        <Button variant="contained" color="secondary" onClick={applyToTrip}>
          Enviar
        </Button>
      </Form>
    </Background>
  );
};

export default ApplicationForm;
