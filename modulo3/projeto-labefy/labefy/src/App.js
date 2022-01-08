import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`

const Body = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
`

const ContainerMenuAndContent = styled.div`
  display: flex;
  height: 100%;
`

class App extends React.Component {
  state = {
    playlists: [],
    addPlaylist: {
      name: ""
    },
    playlistID: "",
    playlistTracks: "",
    track: {
      name: "",
      artist: "",
      url: "",
    }
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "frederico-neves-joy"
      }
    })
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  createPlaylist = () => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", this.state.addPlaylist,
      {
        headers: {
          Authorization: "frederico-neves-joy"
        }
      })
      .then(() => {
        this.getAllPlaylists()
      })
      .catch((err) => {
        console.log(err.response.data)
        alert(err.response.data.message)
      })
  }

  getPlaylistName = (ev) => {
    this.setState({ addPlaylist: { name: ev.target.value } })
  }



  deletePlaylist = (ev) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${ev.target.value}`, {
      headers: {
        Authorization: "frederico-neves-joy"
      }
    })
      .then(() => {
        this.getAllPlaylists()
      }
      )
  }

  getPlaylistTracksAndID = (ev) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${ev.target.value}/tracks`,
      {
        headers: {
          Authorization: "frederico-neves-joy"
        }
      })
      .then((response) => {
        this.setState({ playlistTracks: response.data.result.tracks, playlistID: ev.target.value })
      })
      .catch((err) => {
        alert(err.response)
      })
  }

  addTrackToPlaylist = (id) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      this.state.track,
      {
        headers: {
          Authorization: "frederico-neves-joy"
        }
      })
      .then(() => {
        this.setState({
          track: {
            name: "",
            artist: "",
            url: "",
          }
        })
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          {
            headers: {
              Authorization: "frederico-neves-joy"
            }
          })
          .then((response) => {
            this.setState({ playlistTracks: response.data.result.tracks })
          })
          .catch((err) => {
            alert(err.response)
          })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  removeTrackFromPlaylist = (trackID) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistID}/tracks/${trackID}`,
      {
        headers: {
          Authorization: "frederico-neves-joy"
        }
      })
      .then((response) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistID}/tracks`,
        {
          headers: {
            Authorization: "frederico-neves-joy"
          }
        })
        .then((response) => {
          this.setState({ playlistTracks: response.data.result.tracks })
        })
        .catch((err) => {
          alert(err.response)
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  setTrackName = (ev) => {
    this.setState({ track: { ...this.state.track, name: ev.target.value } })
  }

  setArtistName = (ev) => {
    this.setState({ track: { ...this.state.track, artist: ev.target.value } })
  }

  setTrackUrl = (ev) => {
    this.setState({ track: { ...this.state.track, url: ev.target.value } })
  }

  render() {
    // console.log(this.state.playlistTracks)
    return (
      <Body>
        <GlobalStyle />
        <Header />
        <ContainerMenuAndContent>
          <Menu playlists={this.state.playlists} body={this.getPlaylistName} addPlaylist={this.createPlaylist} deletePlaylist={this.deletePlaylist} getPlaylistTracksAndID={this.getPlaylistTracksAndID} />
          <Content playlistTracks={this.state.playlistTracks} playlists={this.state.playlists} track={this.state.track} setTrackName={this.setTrackName} setArtistName={this.setArtistName} setTrackUrl={this.setTrackUrl} addTrackToPlaylist={this.addTrackToPlaylist} id={this.state.playlistID} removeTrackFromPlaylist={this.removeTrackFromPlaylist} />
        </ContainerMenuAndContent>
      </Body>
    );
  }
}

export default App;
