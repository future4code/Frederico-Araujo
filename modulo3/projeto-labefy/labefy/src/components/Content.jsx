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

        button{
            cursor: pointer;
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
        background-color: #6b5119;
        color: white;
        box-shadow: 2px 2px 5px black;

            h3{
                text-align: center;
                margin: 4px;
            }

            iframe{
                width: 100%;
            }

            .remover-musica{
                background-color: red;
                width: 100%;
                text-align: center;
                cursor: pointer;
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
        return (
            <ContainerContent>
                <div className="add-music">
                    <h3>Adicionar música à playlist - {playlistName}</h3>
                    <input placeholder="Nome da música" value={props.track.name} onChange={props.setTrackName} type="text" />
                    <input placeholder="Nome do artista" value={props.track.artist} onChange={props.setArtistName} type="text" />
                    <input placeholder="URL do YouTube" value={props.track.url} onChange={props.setTrackUrl} type="text" />
                    <button onClick={() => props.addTrackToPlaylist(props.id)}>Adicionar</button>
                </div>
                <hr />
                <div className="musics">
                    {
                        playlistTracks.map((item) => {
                            // Essa parte do código pode parecer confusa, mas eu tive que criar uma forma de receber os 
                            // diferentes tipos de url q o youtube possui para o mesmo video e acrescentar o termo "embed", 
                            // para que o video pudesse ser reproduzido no meu site.
                            const url = item.url
                            const urlSplit = url.split("")
                            let endereco = ""

                            if (url.includes("watch?v=")) {
                                if (url.includes("&")) {
                                    for (let i = 32; urlSplit[i] !== "&"; i++) {
                                        endereco = endereco.concat(urlSplit[i])
                                    }
                                } else{
                                    for (let i = 32; i < urlSplit.length; i++) {
                                        endereco = endereco.concat(urlSplit[i])
                                    }
                                }
                            } else {
                                for (let i = 17; i < urlSplit.length; i++) {
                                    endereco = endereco.concat(urlSplit[i])
                                }
                            }

                            const youTube = "https://www.youtube.com/"
                            const embed = "embed/"
                            const urlConcatenada = youTube + embed + endereco
                            console.log(urlConcatenada)
                            console.log(url)

                            return (
                                <div className="music" key={item.id}>
                                    <iframe src={urlConcatenada} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <h3>{item.name} - {item.artist}</h3>
                                    <div className="remover-musica" onClick={() => props.removeTrackFromPlaylist(item.id)} value={props.id}>
                                        <h4>Remover</h4>
                                    </div>
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