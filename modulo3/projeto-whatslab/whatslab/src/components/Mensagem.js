import React from "react";
import { useState } from "react";
import CaixaDeTexto from "./CaixaDeTexto";

const Mensagem = () => {
    const [usuario, setUsuario] = useState("")
    const [mensagem, setMensagem] = useState("")


    return (
        <CaixaDeTexto>
            <input type="text" id="usuario" placeholder="Usuário"></input>
            <input type="text" id="texto-da-mensagem" placeholder="Mensagem"></input>
            <button>Enviar</button>
        </CaixaDeTexto>
    )
}

export default Mensagem