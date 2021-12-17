import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
    background-color: #ffa600;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    border-bottom: 1px solid white;
`

class Header extends React.Component {
    render() {
        return (
            <ContainerHeader>
                <h1>Labefy</h1>
            </ContainerHeader>
        )
    }
}

export default Header