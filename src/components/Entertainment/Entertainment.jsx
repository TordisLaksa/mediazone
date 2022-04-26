import './Entertainment.scss'
import PlaceHolder from "./APP.png"

const Enterainment = () => {
    return (<>
    <section id='Entertainment'>
        <h1>UNDERHOLDNING</h1>
        <div id='Line'></div>
        <h2>SINGLE-PLAYER</h2>
        <div className='Game-Grid'>
            <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
            <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
            <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
        </div>

        <h2>MULTI-PLAYER</h2>
        <div className='Game-Grid'>
        <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
        <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
        <a href="#"><div><img src={PlaceHolder} alt="" /> <h3>Test</h3></div></a>
        </div>
    </section>
        </>
    )
}
export default Enterainment;