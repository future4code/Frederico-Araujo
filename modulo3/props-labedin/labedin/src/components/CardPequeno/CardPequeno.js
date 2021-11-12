import React from 'react';

const CardPequeno = (props) => {
    return (
        <div>
                <img src = { props.imagem } />                         
                <h4>{ props.titulo }</h4>
                <p>{ props.texto }</p>               
        </div>  
    )
}

export default CardPequeno