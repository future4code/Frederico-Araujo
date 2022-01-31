import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import MeteorRainLoading from "react-loadingg/lib/MeteorRainLoading";
import Header from "../components/Header";
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  h3 {
    color: white;
  }
`;

const Trip = styled.div`
  background-color: rgb(209, 209, 209);
  background: linear-gradient(
    120deg,
    rgba(209, 209, 209, 1) 0%,
    rgba(120, 120, 120, 1) 46%,
    rgba(74, 74, 74, 1) 100%
  );
  color: white;
  margin: 40px;
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
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h1 {
    align-self: center;
  }
  h3,
  h4,
  p {
    margin: 8px;
  }
`;

const ListaDeCandidatos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Candidatos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 100%;
  margin: 8px;
  padding: 8px;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px white;

  Button {
    align-self: center;
    width: 10vw;
    max-width: 200px;
    min-width: 100px;
    margin: 4px;
  }
`;

const Approved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 100%;

  h2 {
    align-self: center;
  }
  ul {
    margin: 8px 0;
    padding: 8px;
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px white;
    min-width: 100%;
  }
`;

const TripDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const [trip, setTrip] = useState(undefined);
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);

  const getTripDetail = async () => {
    const response = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trip/${params.id}`,
      {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    try {
      setTrip(response.data.trip);
      setCandidates(response.data.trip.candidates);
      setApproved(response.data.trip.approved);
    } catch {
      alert(response.error);
    }
  };

  useEffect(() => {
    getTripDetail();
    document.title = "Detalhes da viagem";
  }, []);

  const decideCandidate = async (candidateId, approve) => {
    const response = await axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fred-joy/trips/${params.id}/candidates/${candidateId}/decide`,
      {
        approve: approve,
      },
      {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      }
    );
    try {
      getTripDetail();
    } catch {
      alert(response.error);
    }
  };

  if (trip === undefined) {
    return (
      <Background>
        <MeteorRainLoading />
        <h3>Loading...</h3>
      </Background>
    );
  } else if (
    trip !== undefined &&
    candidates.length !== 0 &&
    approved.length === 0
  ) {
    return (
      <div>
        <Header />
        <Background>
          <Trip key={trip.id}>
            <Details>
              <h1>
                {trip.name}
                <hr></hr>
              </h1>
              <h3>Planeta: {trip.planet}</h3>
              <h4>Duração: {trip.durationInDays} dias</h4>
              <p>Descrição: {trip.description}</p>
            </Details>
            <ListaDeCandidatos>
              <h2>
                Candidatos
                <hr />
              </h2>

              {candidates.map((item) => {
                return (
                  <Candidatos key={item.id}>
                    <h3>
                      {item.name} - {item.age} anos
                    </h3>
                    <h4>País: {item.country}</h4>
                    <h4>Profissão: {item.profession}</h4>
                    <p>{item.applicationText}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => decideCandidate(item.id, true)}
                    >
                      Aceitar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => decideCandidate(item.id, false)}
                    >
                      Rejeitar
                    </Button>
                  </Candidatos>
                );
              })}
            </ListaDeCandidatos>
          </Trip>
        </Background>
      </div>
    );
  } else if (
    trip !== undefined &&
    candidates.length !== 0 &&
    approved.length !== 0
  ) {
    return (
      <div>
        <Header />
        <Background>
          <Trip key={trip.id}>
            <Details>
              <h1>
                {trip.name}
                <hr></hr>
              </h1>
              <h3>Planeta: {trip.planet}</h3>
              <h4>Duração: {trip.durationInDays} dias</h4>
              <p>Descrição: {trip.description}</p>
            </Details>
            <Approved>
              <h2>
                Candidatos aprovados
                <hr />
              </h2>
              <ul>
                {approved.map((item) => {
                  return <p key={item.id}> - {item.name}</p>;
                })}
              </ul>
            </Approved>
            <ListaDeCandidatos>
              <h2>
                Candidatos
                <hr />
              </h2>

              {candidates.map((item) => {
                return (
                  <Candidatos>
                    <h3>
                      {item.name} - {item.age} anos
                    </h3>
                    <h4>País: {item.country}</h4>
                    <h4>Profissão: {item.profession}</h4>
                    <p>{item.applicationText}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => decideCandidate(item.id, true)}
                    >
                      Aceitar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => decideCandidate(item.id, false)}
                    >
                      Rejeitar
                    </Button>
                  </Candidatos>
                );
              })}
            </ListaDeCandidatos>
          </Trip>
        </Background>
      </div>
    );
  } else if (
    trip !== undefined &&
    candidates.length === 0 &&
    approved.length !== 0
  ) {
    return (
      <div>
        <Header />
        <Background>
          <Trip key={trip.id}>
            <Details>
              <h1>
                {trip.name}
                <hr></hr>
              </h1>
              <h3>Planeta: {trip.planet}</h3>
              <h4>Duração: {trip.durationInDays} dias</h4>
              <p>Descrição: {trip.description}</p>
            </Details>
            <Approved>
              <h2>
                Candidatos aprovados
                <hr />
              </h2>
              <ul>
                {approved.map((item) => {
                  return <p key={item.id}> - {item.name}</p>;
                })}
              </ul>
            </Approved>
            <ListaDeCandidatos>
              <h2>
                Essa viagem não possui mais candidatos
                <hr />
              </h2>
            </ListaDeCandidatos>
          </Trip>
        </Background>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Background>
          <Trip key={trip.id}>
            <Details>
              <h1>
                {trip.name}
                <hr></hr>
              </h1>
              <h3>Planeta: {trip.planet}</h3>
              <h4>Duração: {trip.durationInDays} dias</h4>
              <p>Descrição: {trip.description}</p>
            </Details>
            <ListaDeCandidatos>
              <h2>
                Essa viagem ainda não possui candidatos
                <hr />
              </h2>
            </ListaDeCandidatos>
          </Trip>
        </Background>
      </div>
    );
  }
};
export default TripDetailsPage;
