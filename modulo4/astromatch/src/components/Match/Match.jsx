import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  padding: 18px;
  width: 50vw;
  background-color: #cc8f99;
  border-radius: 25px;
  box-shadow: 3px 3px 5px #cc5b6e;

  button {
    margin: 5px;
  }

  .options {
    button {
      font-size: 28px;
      padding: 0;
    }
  }

  .navigation {
    align-self: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  width: 50vw;
  max-height: 50vh;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #cc8f99;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #cc5b6e;
  }

  img {
    height: 7vh;
    width: 7vh;
    border-radius: 50%;
  }

  .person {
    margin: 8px;
    width: 15vw;
  }
`;

function Match(props) {
  if (props.matches.length != 0) {
    return (
      <Container>
        <Card>
          <div className="navigation">
            <Button
              onClick={props.changeScreen}
              variant="outlined"
              color="inherit"
            >
              Tela inicial
            </Button>
            <Button variant="outlined" color="inherit" onClick={props.clear}>
              Apagar matches
            </Button>
          </div>
          <Content>
            {props.matches.map((item) => {
              return (
                <div className="person" key={item.id}>
                  <img src={item.photo} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </Content>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container>
        <Card>
          <div className="navigation">
            <Button
              onClick={props.changeScreen}
              variant="outlined"
              color="inherit"
            >
              Tela inicial
            </Button>
            <Button variant="outlined" color="inherit" onClick={props.clear}>
              Apagar matches
            </Button>
          </div>
          <Content>
            <h2>Você ainda não possui matches, mas não desanime!</h2>
          </Content>
        </Card>
      </Container>
    );
  }
}

export default Match;
