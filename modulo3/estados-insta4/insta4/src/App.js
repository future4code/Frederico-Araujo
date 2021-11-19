import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
 state = {
  usuarios: [
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
  ]
}   
  
  render() {
    const posts = this.state.usuarios.map((item) => {
      return <Post
       nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
        />
    })
    return (
      <MainContainer>
        <div>{posts}</div>
      </MainContainer>
    );
  }
}

export default App;
