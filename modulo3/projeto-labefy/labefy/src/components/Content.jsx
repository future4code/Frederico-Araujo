import React, { memo } from "react";
import styled from "styled-components";

const ContainerContent = styled.div`
    background-color: #b47500;
    height: 100%;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .add-music{
        text-align: center;

        input{
            text-align: center;
        }
    }

    .musics{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        .music{
        margin: 14px;
        border: 1px solid black;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        background-color: #b4a17c;
        color: white;
        box-shadow: 2px 2px 5px black;

            h3{
                text-align: center;
                margin: 4px;
            }

            iframe{
                width: 100%;
            }
    }
    }
    
    input{
        margin: 4px;
    }

    hr{
        width: 100%;
    }
   
`

const Content = (props) => {
    const playlistTracks = props.playlistTracks
    const playlists = props.playlists

    const playlist = playlists.filter((item) => {
        if (props.id === item.id) {
            return item.name
        }
    })

    const playlistName = playlist.map((item) => {
        return item.name
    })

    if (playlistTracks === "") {
        return (
            <ContainerContent>
                <h3>Nenhuma playlist selecionada</h3>
            </ContainerContent>
        )
    } else {
        // console.log(playlistName)
        return (
            <ContainerContent>
                <div className="add-music">
                    <h3>Adicionar música à playlist - {playlistName}</h3>
                    <input placeholder="Nome da música" value={props.track.name} onChange={props.setTrackName} type="text" />
                    <input placeholder="Nome do artista" value={props.track.artist} onChange={props.setArtistName} type="text" />
                    <input placeholder="URL" value={props.track.url} onChange={props.setTrackUrl} type="text" />
                    <button onClick={() => props.addTrackToPlaylist(props.id)}>Adicionar</button>
                </div>
                <hr />
                <div className="musics">
                    {
                        playlistTracks.map((item) => {
                            return (
                                <div className="music" key={item.id}>
                                    <iframe src={item.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <h3>{item.name} - {item.artist}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </ContainerContent>
        )
    }
}

export default memo(Content)