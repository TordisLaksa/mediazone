import './Entertainment.scss'
import PlaceHolder from "./APP.png";
import Gamegrid from './Gamegrid';
const Enterainment = () => {
    return (<>
    <section id='Entertainment'>
        <h1>UNDERHOLDNING</h1>
        <div id='Line'></div>
        <h2>SINGLE-PLAYER</h2>
        <Gamegrid
            games={[
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
            ]}
        />

        <h2>MULTI-PLAYER</h2>
        <div className='Game-Grid'>
        <Gamegrid
            games={[
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
                {
                    url: PlaceHolder,
                    gameName: "Test"
                },
            ]}
        />
        </div>
    </section>
        </>
    )
}
export default Enterainment;