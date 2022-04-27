import './Logo.scss'
import LogoSvg from "../../Svgs/Logo.svg"
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <header className="Logo"><Link to='/'><img src={LogoSvg} alt="logo"/></Link></header>
            )
    }
    export default Logo;