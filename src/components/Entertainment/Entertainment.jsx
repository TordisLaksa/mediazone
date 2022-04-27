import './Entertainment.scss'
import PlaceHolder from "./APP.png";
import Gamegrid from './Gamegrid';
import { useState } from 'react';


const Enterainment = () => {
    const [games, setGames] = useState([
        {
            id: 1,
            url: PlaceHolder,
            gameName: "Test"
        },
        {   
            id: 2,
            url: PlaceHolder,
            gameName: "Test"
        },
        {
            id:3,
            url: PlaceHolder,
            gameName: "Test"
        },
    ])
    return (<>
    <section id='Entertainment'>
        <h1>UNDERHOLDNING</h1>
        <div id='Line'></div>
        <h2>SINGLE-PLAYER</h2>
        <Gamegrid
            games={games}
        />

        <h2>MULTI-PLAYER</h2>
        <Gamegrid
            games={games}
        />
    </section>
        </>
    )
}
export default Enterainment;