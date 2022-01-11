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
  align-items: center;
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
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 40vw;

  img {
    height: 10vh;
  }

  .person {
    margin: 8px;
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
