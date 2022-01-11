import react, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Match from "./components/Match/Match";

function App() {
    const aluno = "frederico-neves";
    const [home, setHome] = useState(true);
    const [match, setMatch] = useState(false);
    const [profile, setProfile] = useState(false);
    const [body, setBody] = useState({
        id: "",
        choice: "",
    });
    const [matches, setMatches] = useState([]);
    console.log(matches)
    const getProfileToChoose = async () => {
        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            setProfile(response.data.profile);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfileToChoose();
    }, [body]);

    useEffect(() => {
        getMatches();
    }, []);

    const choosePerson = () => {
        try {
            axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
        } catch (error) {
            console.log(error);
        }
    }

    const getMatches = async () => {
        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
            setMatches(response.data.matches)
        } catch (error) {
            console.log(error);
        }
    }

    const clear = () => {
        try {
            axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
            getMatches()
        } catch (error) {
            console.log(error);
        }
    }

    const changeScreen = () => {
        setHome(!home);
        setMatch(!match);
    }

    if (home && profile != false) {
        return (<Home
            changeScreen={changeScreen}
            profile={profile}
            setBody={setBody}
            choosePerson={choosePerson}
            getMatches={getMatches}
            clear={clear}
        />
        );

    } else if (match) {

        return (<Match
            changeScreen={changeScreen}
            matches={matches}
            clear={clear}
        />
        );

    } else {

        return (
            <></>
        )

    }
}

export default App;