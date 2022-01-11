import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    color: white;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 18px;
    width: 50vw;
    background-color: #cc8f99;
    border-radius: 25px;
    box-shadow: 3px 3px 5px #cc5b6e;

    button{
        margin: 5px;
    }

    .options{
        button{
            font-size: 28px;
            padding: 0;
        }
    }

`

const Content = styled.div`
   .image{
       height: 35vh;
   }
`

function Home(props) {
    const profile = props.profile;

    const like = (event) => {
        props.setBody({
            id: event.target.value,
            choice: true
        })
        props.choosePerson()
    }

    const unlike = (event) => {
        props.setBody({
            id: event.target.value,
            choice: false
        })
        props.choosePerson()
    }

    const changeScreen = () => {
        props.changeScreen()
        props.getMatches()
    }
    if (profile) {
        return (
            <Container>
                <Card>
                    <div className='navigation'>
                        <Button onClick={changeScreen} variant='outlined' color='inherit'>Matches</Button>
                        <Button variant='outlined' color='inherit' onClick={props.clear}>Apagar matches</Button>
                    </div>
                    <Content>
                        <h2>{`${profile.name} - ${profile.age}`}</h2>
                        <div className='data'>
                            <img className='image' src={profile.photo} alt={profile.name} />
                            <br />
                            <div className='options'>
                                <Button variant='contained' color='error' value={profile.id} onClick={unlike}>X</Button>
                                <Button variant='contained' color='success' value={profile.id} onClick={like}>♥️</Button>
                            </div>
                        </div>
                        <p>{profile.bio}</p>
                    </Content>
                </Card>
            </Container>
        )
    } else{
        return(
            <Container>
                <Card>
                    <div className='navigation'>
                        <Button onClick={changeScreen} variant='outlined' color='inherit'>Matches</Button>
                        <Button variant='outlined' color='inherit'>Apagar matches</Button>
                    </div>
                    <Content>
                        <h2>Não existem mais perfis para observar</h2>
                    </Content>
                </Card>
            </Container>
        )
    }
}

export default Home
