import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div`
 display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  h2{
    margin: 2px;
  }
  
`

const DisplayInput = styled.div`
display: flex;
input {
  margin: 0 20px;
  margin-bottom: 10px;
}

button{
  margin: 0 20px;
  margin-bottom: 10px;
}

`

class App extends React.Component {
 state = {
  posts: [
  {
      nomeUsuario: 'Fred',
      fotoUsuario: 'https://picsum.photos/50/50?random=1',
      fotoPost: 'https://picsum.photos/200/150?random=1'
  },
  {
    nomeUsuario: 'Camila',
    fotoUsuario: 'https://picsum.photos/50/50?random=2',
    fotoPost: 'https://picsum.photos/200/150?random=2'
  },
  {
    nomeUsuario: 'Bia',
    fotoUsuario: 'https://picsum.photos/50/50?random=3',
    fotoPost: 'https://picsum.photos/200/150?random=3'
  }
  ],

  valorInputNome: "",
  valorInputFotoUsuario: "",
  valorInputFotoPost:""
}

  adicionaPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novaTimeLine = [...this.state.posts, novaPostagem]

    this.setState({
      posts: novaTimeLine
    })
  }
  
  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})    
  }
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})    
  }
  render() {
    const post = this.state.posts.map((item) => {
      return <Post
       nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
        />
    })

      return (
        <div>
            <MainContainer>
              <div>{post}</div>
            </MainContainer>
            <NovoPost>
              <h2>Adicionar nova postagem:</h2>
              <DisplayInput>
              <input
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome do usuário"}        
              />
               <input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"URL da foto do usuário"}        
              />
               <input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"URL da foto do post"}        
              />              
              <button onClick={this.adicionaPost}>Adicionar</button>
              </DisplayInput>
            </NovoPost>
        </div>
      

      

    );
  }
}

export default App;
