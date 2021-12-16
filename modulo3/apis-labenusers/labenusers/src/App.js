import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const LayoutCadastro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  .input{
    margin: 8px;
  }
  

  button{
      margin: 8px;
  }
`
const LayoutLista = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  button{
    margin-left: 8px;
  }
`



class App extends React.Component {

  state = {
    usuarios: [],
    email: "",
    name: "",
    id: "",
    buscaNome: ""
  }

  componentDidMount = () => {
    this.pegarUsuarios()
  }

  componentDidUpdate = () => {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "Frederico-Neves-Joy"
      }
    }).then((res) => {
      this.setState({ usuarios: res.data })
      // console.log(res)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  cadastroEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  cadastroNome = (e) => {
    this.setState({ name: e.target.value })
  }

  postarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "Frederico-Neves-Joy"
      }
    }).then((res) => {
      alert("Usuário adicionado com sucesso!")
    }).catch((err) => {
      alert("Erro ao adicionar usuário")
    })
  }

  apagarUsuario = (e) => {
    const id = e.target.value
    console.log(id)
    const certeza = window.confirm("Tem certeza que deseja deletar?")
    if (certeza === true) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: "Frederico-Neves-Joy"
        }
      }).then((res) => {
        alert("Usuário excluído com sucesso!")
      }).catch((err) => {
        alert("Erro ao excluir usuário")
      })
    } else {
      alert("Operação cancelada")
    }

  }

  buscarNome = (e) => {
    this.setState({ buscaNome: e.target.value })
  }

  render() {

    const usuario = this.state.usuarios.map((item) => {
      return (
        <div key={item.id}>
          <ul>
            <li>
              <h3>{item.name}</h3>
            </li>
          </ul>
          <button onClick={this.apagarUsuario} value={item.id}>Deletar</button>
        </div>
      )
    })
    // console.log(lista)
    return (
      <div>
        <LayoutCadastro>
          <h1>Cadastro de usuário</h1>
          <div className="input">
            <input placeholder="E-mail" value={this.state.email} onChange={this.cadastroEmail} type="email" />
          </div>
          <div className="input">
            <input placeholder="Nome" value={this.state.name} onChange={this.cadastroNome} type="text" />
          </div>
          <div className="add-button">
            <button onClick={this.postarUsuario}>Adicionar</button>
          </div>
        </LayoutCadastro>
        <hr />
        <LayoutLista>
          <div>
            <h1>Lista de usuários</h1>
          </div>
          <div>
            <input placeholder="Insira o nome" value={this.state.buscaNome} onChange={this.buscarNome} />
            <button>Buscar</button>
          </div>
          {usuario}
        </LayoutLista>
      </div>

    );
  }
}

export default App;
