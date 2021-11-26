import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'

const EstiloDoTexto = styled.div` 
  text-align: center;
`

document.title = "Renderização Condicional";



function App() {
  
  const [ pagina, setPagina ] = useState(<Etapa1/>)

  
  const [ secao, setSecao ] = useState (1)

  const onClickBotao = () => {
    setSecao(secao + 1)
  }

  console.log(secao)

  useEffect(() => {
    if (secao === 2){
      setPagina(<Etapa2/>)
    } else if (secao === 3){
      setPagina(<Etapa3/>)
    } else if (secao === 4){
      setPagina(<Etapa4/>)
    } else if (secao > 4){
      setPagina(<Etapa1/>)
      setSecao(1)
    }
  }
  , [secao])
  
  const Botao = () => {
    if (secao === 4){
      return <button onClick = {onClickBotao}>Voltar ao Início</button>
    } else {
      return <button onClick = {onClickBotao}>Próxima Etapa</button>
    }
  }
  
  return (
    <div className="App">
      <EstiloDoTexto> {pagina} 
      <br/>        
      <Botao/>
      </EstiloDoTexto>       
    </div>
  );
}

export default App;
