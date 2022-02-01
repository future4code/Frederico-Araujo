import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";

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

const CreateTripPage = () => {
  useProtectedPage();
  useEffect(() => {
    document.title = "Nova viagem";
  }, []);
  const [body, setBody] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const getName = (e) => {
    setBody({ ...body, name: e.target.value });
  };
  const getPlanet = (e) => {
    setBody({ ...body, planet: e.target.value });
  };
  const getDate = (e) => {
    setBody({ ...body, date: e.target.value });
  };
  const getDescription = (e) => {
    setBody({ ...body, description: e.target.value });
  };
  const getDurationInDays = (e) => {
    setBody({ ...body, durationInDays: e.target.value });
  };

  const createTrip = async () => {
    if (
      body.name === "" ||
      body.planet === "" ||
      body.date === "" ||
      body.description === "" ||
      body.durationInDays === ""
    ) {
      alert("Preencha todos os campos!");
    } else {
      const response = await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trips`,
        body,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      );
      try {
        alert("Cadastro feito com sucesso!");
        setBody({
          name: "",
          planet: "",
          date: "",
          description: "",
          durationInDays: "",
        });
      } catch {
        alert(response.error);
      }
    }
  };

  return (
    <div>
      <Header />
      <Background>
        <Form>
          <h1>
            Cadastro de Viagem
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
              label="Planeta"
              variant="standard"
              margin="normal"
              type="text"
              value={body.planet}
              onChange={getPlanet}
            />
            <TextField
              id="outlined-basic"
              variant="standard"
              margin="normal"
              type="date"
              value={body.date}
              onChange={getDate}
            />
            <TextField
              id="outlined-basic"
              label="Descrição"
              variant="standard"
              margin="normal"
              type="text"
              value={body.description}
              onChange={getDescription}
            />
            <TextField
              id="outlined-basic"
              label="Dias de duração"
              variant="standard"
              margin="normal"
              type="text"
              value={body.durationInDays}
              onChange={getDurationInDays}
            />
          </Text>
          <Button variant="contained" color="secondary" onClick={createTrip}>
            Cadastrar
          </Button>
        </Form>
      </Background>
    </div>
  );
};

export default CreateTripPage;
