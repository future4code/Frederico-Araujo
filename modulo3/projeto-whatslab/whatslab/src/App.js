import React from "react";
import styled from "styled-components";



const AreaTotal = styled.div` 
display: flex;
flex-direction: column;
height: 100vh;
width: 50vw;
margin-left: 25vw;
border: 1px solid black;
`

const AreaDeMensagem = styled.div ` 
display: flex;
flex-direction: column-reverse;
height: 97%;
padding: 0 10px;
`
const AreaInput = styled.div ` 
display: flex;
height: 3%;

.usuario{
  width: 30%;
}

.mensagem{
  width: 60%;
}

.botao{
  width: 10%;
  &:hover{
    background-color: lightgreen;
  }
  &:active{
    background-color: green;
    color: white;
  }
}
`

const Mensagem = styled.div ` 
display: flex;
flex-direction:column;
h3{
  margin: 0 3px;
}
div{
  display:flex;
  align-items: center;
}
`

class App extends React.Component {
  state = {
    mensagem: [
        {
            nomeUsuario: "",
            texto: ""
        }
    ],
    inputUsuario:"",
    inputTexto: ""
}

  onChangeUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({inputTexto: event.target.value})
  }

  onClickBotao = () => {
    const novaMensagem = {
      nomeUsuario: this.state.inputUsuario,
      texto: this.state.inputTexto
    }
    const adicionaMensagem = [...this.state.mensagem, novaMensagem]
    this.setState({mensagem: adicionaMensagem})
    this.setState({inputTexto: ""})
  }

  render() {
    const chat = this.state.mensagem.map((item) => {
      return(
        <div>
        <h3>{item.nomeUsuario}</h3>
        <p>{item.texto}</p>        
        </div>
      )
    })    
    return (
      <AreaTotal>
          <AreaDeMensagem>
               <Mensagem>
                 {chat}          
               </Mensagem>
          </AreaDeMensagem>
          <AreaInput>
              <input className = "usuario"
              placeholder="Usuário"
              value={this.state.inputUsuario}
              onChange={this.onChangeUsuario}
              />
               <input className = "mensagem"
              placeholder="Mensagem"
              value={this.state.inputTexto}
              onChange={this.onChangeMensagem}
              />              
              <button
              className = "botao"
              onClick = {this.onClickBotao}
              >Enviar</button>
          </AreaInput>

      </AreaTotal>
    
    )}
}

export default App