import React, {useState} from "react";

function Etapa1 () {
    
    return (
    <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <form>
                    <p>1. Qual o seu nome?</p>
                    <input placeholder = "Digite seu nome"/>            
                    <p>2. Qual a sua idade?</p>
                    <input placeholder = "Digite sua idade"/>    
                    <p>3. Qual o seu e-mail?</p>
                    <input placeholder = "Digite seu e-mail"/> 
                    <p>4. Qual seu grau de escolaridade?</p>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superio Incompleto</option>
                        <option>Ensino Superio Completo</option>
                    </select>
            </form>              
        </div>
      )
  }

export default Etapa1;