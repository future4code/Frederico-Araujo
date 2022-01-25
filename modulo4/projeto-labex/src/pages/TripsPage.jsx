import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import MeteorRainLoading from "react-loadingg/lib/MeteorRainLoading";
import Header from "../components/Header";
import { Button } from "@mui/material";

// import { useHistory, useParams } from "react-router-dom";

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

const Travels = styled.div`
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
  min-height: 50vh;
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

const TravelsPage = () => {
  const [trips, setTrips] = useState();
  const aluno = "fred-joy";
  const history = useHistory();
  // const params = useParams();
  // console.log(params);

  const getTrips = async () => {
    const response = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
    );
    try {
      setTrips(response.data.trips);
      console.log(response.data.trips);
    } catch {
      alert(response.error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const applicationForm = () => {
    history.push("/trips/application");
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
          {trips.map((item) => {
            return (
              <Travels>
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
                  onClick={applicationForm}
                >
                  Inscrever-se
                </Button>
              </Travels>
            );
          })}
        </Background>
      </div>
    );
  }
};

export default TravelsPage;
