import { Link } from "react-router-dom"
import MapImages from "../../Svgs/infoboard-map-overview.svg"
import BackSvg from "../../Svgs/x-solid.svg"
import './Map.scss'
const Map = () => {
    return(
        <section className="mapWrapper">
            <Link to='/guides'>
                <img className="backSvg" src={BackSvg} alt="back-svg" />
            </Link>
            <img className="mapSvg" src={MapImages} alt="map-svg" />
        </section>
    )
}
export default Map