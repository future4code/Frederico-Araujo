import logo from './logo.svg';
import styled from 'styled-components'
import Mensagem from './components/Mensagem';

function App() {
  return (
    <div>
      <Mensagem
      nome = 'Fred'
      texto = 'Olá'
        />
    </div>
  );
}

export default App;
