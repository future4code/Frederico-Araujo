import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  align-items: center;
  justify-content: center;
`;

const Travels = styled.div`
  background-color: rgb(209, 209, 209);
  background: linear-gradient(
    120deg,
    rgba(209, 209, 209, 1) 0%,
    rgba(120, 120, 120, 1) 46%,
    rgba(74, 74, 74, 1) 100%
  );
`;

const TravelsPage = () => {
  const { trips, setTrips } = useState();
  const aluno = "frederico-joy";
  // const params = useParams();
  // console.log(params);

  const getTrips = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
      );
      setTrips(response);
      console.log(response);
    } catch {
      // alert(response.error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <Background>
      <Travels>Travel</Travels>
    </Background>
  );
};

export default TravelsPage;
