import React from "react";
import styled from "styled-components";

const ContainerMenu = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
    max-width: 300px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    border-right: 1px solid white;


    .add-playlist{
                margin: 8px;

                input{
                    margin: 4px;
                    width: 90%;
                    text-align: center;
                }

                button{
                    margin: 4px;
                    cursor: pointer;
                }

                h4{
                    text-align:center;
                }
            }

    .title{
        background-color: #e09405;
        width: 100%;
        h3{
            padding: 8px;
        }
    }

    hr{
        width: 100%;
    }

    .playlist{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;

        :hover{
            background-color: #ffa600;
            transition: 0.4s ease-in;
            button{
                color: white;
                transition: 0.4s ease-in;
            }
        }

        h4:first-letter{
          text-transform: uppercase;
        }

        button{
            border: none;
            border-radius: 5px;
            padding: 4px;
            background-color: transparent;
            cursor: pointer;
            
                :hover{
                    color: white;
                    background-color: #272626;
                    transition: 0.4s ease-in;
                }
                :active{
                    background-color: #be7c01;
                    transition: 0s;
                }
        }

        .buttons{
            display: flex;
            flex-direction: column;        
            }
            
}

.new-playlist{
            button{
                border: none;
                background-color: #ffa600;
                color: white;
                border-radius: 50px;
                padding: 10px;

                :active{
                    background-color: #be7c01;
                    transition: 0s;
                }
            }

            input{
                margin: 5px auto;
                padding: 10px;
                border: none;
                margin-bottom: 10px;
                border-radius: 50px;
            }
        }
`

const Menu = (props) => {
    const playlist = props.playlists
    const newPlaylist = props.body
    const addPlaylist = props.addPlaylist
    const deletePlaylist = props.deletePlaylist
    const getPlaylistTracksAndID = props.getPlaylistTracksAndID

    if (playlist !== []) {
        return (
            <ContainerMenu>
                <div className="title">
                    <h3>Minhas playlists</h3>
                </div>
                {playlist.map((item) => {
                    return (
                        <div className="playlist" key={item.id}>
                            <div >
                                <h4>{item.name}</h4>
                            </div>
                            <div className="buttons">
                                <button value={item.id} onClick={getPlaylistTracksAndID}>Visualisar playlist</button>
                                <button value={item.id} onClick={deletePlaylist}>Deletar playlist</button>
                            </div>
                        </div>
                    )
                })
                }
                <hr />
                <div className="add-playlist">
                    <h4>Adicionar playlist</h4>
                    <div className="new-playlist">
                        <input placeholder="Digite o nome da nova playlist" onChange={newPlaylist} />
                        <button onClick={addPlaylist}>Adicionar</button>
                    </div>
                </div>
            </ContainerMenu>
        )
    } else {
        return (
            <div>
                <p>
                    Nenhuma playlist adicionada
                </p>
                <h4>Adicionar playlist</h4>
                <div className="new-playlist">
                    <input placeholder="Digite o nome da nova playlist" onChange={newPlaylist} />
                    <button onClick={addPlaylist}>Adicionar</button>
                </div>
            </div>
        )
    }

}

export default Menu