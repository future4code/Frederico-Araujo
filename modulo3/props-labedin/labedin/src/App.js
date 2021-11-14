import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
  .App{
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

const CardGrandeStyle = styled.div `
  border: 1px solid black;
  text-align: left;
  margin: 1vw 30vw;
  padding: 20px;
  
  img{
    width: 80px;
    border-radius: 50%;
  }
`
const ImagemButtonStyle = styled(CardGrandeStyle)`
  border-radius: 20px;
  margin: 1vw 44vw;

  img{
    width: 30px;
  }
`

const CardPequenoStyle = styled(CardGrandeStyle)`
  img{
    width: 20px;
    border-radius: 0;
  }
`

function App() {
  return (    
    <div className="App">
      <GlobalStyle/>
      <div className="page-section-container">        
        <h2>Dados pessoais</h2>
        <CardGrandeStyle>
          <CardGrande 
            imagem="https://media-exp1.licdn.com/dms/image/C5603AQFd4vDbJ8e46Q/profile-displayphoto-shrink_100_100/0/1517044167967?e=1642032000&v=beta&t=lRRThEX7E1BGRuDmP-rqwNEZfNOH0YShTrIvRHYTq20" 
            nome="Frederico" 
            descricao="Oi, eu sou o Frederico. Sou um estudante da Labenu. Adoro futebol e video-games."
            />
          </CardGrandeStyle>
          <ImagemButtonStyle >
            <ImagemButton 
              imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
              texto="Ver mais"
            /> 
          </ImagemButtonStyle>
          
               
      </div>
      <div>
      <CardPequenoStyle>
        <CardPequeno        
          imagem = "https://cdn-icons.flaticon.com/png/128/69/premium/69957.png?token=exp=1636668882~hmac=dbf60f30fd594a1484706279732ede5b"
          titulo = "E-mail:"
          texto = "fred_10f@hotmail.com"        
          />
      </CardPequenoStyle>
        
        <CardPequenoStyle>
          <CardPequeno        
          imagem = "https://cdn.icon-icons.com/icons2/2460/PNG/128/location_pin_place_map_address_placeholder_icon_149107.png"
          titulo = "Endereço:"
          texto = "Belo Horizonte, Brasil"        
          />
        </CardPequenoStyle>
        
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrandeStyle>
          <CardGrande 
            imagem="data:image/png;base64,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" 
            nome="Labenu" 
            descricao="Estudando para entrar no mercado de trabalho!" 
          />
        </CardGrandeStyle>        
        
        <CardGrandeStyle>
          <CardGrande 
            imagem="data:image/jpeg;base64,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" 
            nome="ALETEC" 
            descricao="Coordenando Projetos." 
          />
        </CardGrandeStyle>
        
      </div>

      <div className="page-section-container">        
        <h2>Minhas redes sociais</h2>
        <ImagemButtonStyle>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />
        </ImagemButtonStyle>
              
        <ImagemButtonStyle>
          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          /> 
        </ImagemButtonStyle>
              
      </div>
    </div>
  );
}

export default App;
