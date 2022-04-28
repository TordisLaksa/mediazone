import { Link } from "react-router-dom";
import './Guides.scss'
import MapSvg from "../../Svgs/map-location-dot-solid.svg"
import ScaleBalanced from '../../Svgs/scale-balanced-solid.svg'

const Guides = () => {
    return (
        <section className="guidesBtn">
            <Link to='/map'>
                <button >Kort over skolen med navigation</button>
                {/* <i className='fa-solid fa-map-location-dot'></i> */}
                <img src={MapSvg} alt="map-svg" />
            </Link>
            <Link to='/rules'>
                <button>Information om skolens retningslinjer mm.</button>
                {/* <i className='fa-solid fa-scale-balanced'></i> */}
                <img src={ScaleBalanced} alt="scale-balanced-svg" />
            </Link>
        </section>
    )
}
export default Guides;

