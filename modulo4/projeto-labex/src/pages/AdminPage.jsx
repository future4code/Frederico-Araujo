import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MeteorRainLoading from "react-loadingg/lib/MeteorRainLoading";
import { useHistory } from "react-router-dom";

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

const Trips = styled.div`
  background-color: rgb(209, 209, 209);
  background: linear-gradient(
    120deg,
    rgba(209, 209, 209, 1) 0%,
    rgba(120, 120, 120, 1) 46%,
    rgba(74, 74, 74, 1) 100%
  );
  color: white;
  margin-bottom: 40px;
  padding: 20px;
  width: 80vw;
  max-width: 1000px;
  min-height: 500px;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 5px white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
  }

  Button {
    align-self: center;
    width: 40vw;
    max-width: 200px;
  }
`;

const CreateNewTrip = styled.div`
  color: white;
  margin-top: 40px;
  padding: 20px;
  width: 80vw;
  max-width: 1000px;
  min-height: 140px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  Button {
    margin: 8px;
    align-self: center;
  }
`;

const AdminPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [trips, setTrips] = useState();

  const getTrips = async () => {
    const response = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trips`
    );
    try {
      setTrips(response.data.trips);
    } catch {
      alert(response.error);
    }
  };

  useEffect(() => {
    getTrips();
    document.title = "Administrador";
  }, []);

  const deleteTrip = async (id) => {
    await axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trips/${id}`,
      {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    try {
      console.log(id);
      getTrips();
    } catch {
      alert("Não foi possível excluir a viagem");
    }
  };

  const createTrip = () => {
    history.push("/admin/trips/create");
  };

  const tripDetails = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  if (trips === undefined) {
    return (
      <Background>
        <MeteorRainLoading />
        <h3>Loading...</h3>
      </Background>
    );
  } else {
    return (
      <div>
        <Header />
        <Background>
          <div>
            <CreateNewTrip>
              <h1>
                Área do Administrador
                <hr />
              </h1>
              <Button
                variant="contained"
                color="secondary"
                onClick={createTrip}
              >
                Criar nova viagem
              </Button>
            </CreateNewTrip>
          </div>
          {trips.map((item) => {
            return (
              <Trips key={item.id}>
                <h1>
                  {item.name}
                  <hr></hr>
                </h1>
                <h3>Planeta: {item.planet}</h3>
                <h4>Duração: {item.durationInDays} dias</h4>
                <p>{item.description}</p>
                <Button
                  variant="contained"
                  color="secondary"
                  value={item.id}
                  onClick={() => tripDetails(item.id)}
                >
                  Detalhes
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  value={item.id}
                  onClick={() => deleteTrip(item.id)}
                >
                  Excluir viagem
                </Button>
              </Trips>
            );
          })}
        </Background>
      </div>
    );
  }
};

export default AdminPage;
