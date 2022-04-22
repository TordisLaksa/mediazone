import { NavLink } from "react-router-dom";
import { BusTimes } from "../bus/bus";
import Home from "../../Pages/Home/Home";
import './Navigation.scss'

// Array med/til navigator
export const navArrList = [
    // <Home /> er custom element
    {
        title: 'Forside',
        path: "/",
        element: <Home />,
        display: true
    },
    // <BusTimes /> er custom element 
    {
        title: 'Bustider',
        path: "/bustimes",
        element: <BusTimes />,
        display: true
    },
]

// Nav element 
// laver menuen med navArrList
export const Nav = props => {
    return(
        <nav>
            <ul>
                {navArrList.map((item, key) => {
                    return(
                        item.display? 
                        <li key={key} className="navList">
                            {/*NavLink er components til navigation fra react router dom  */}
                            <NavLink to={item.path}> {item.title} </NavLink>
                        </li>
                        : null
                    )
                })}
            </ul>
        </nav>
    )
}

export const NavModal = props => {
    if(!props.show){
        return null
    }
    return(
        <div className="navModal">
            <div className="modalBody">
                <Nav />
                <button onClick={props.onClose} className="modalButton">Close</button>
            </div>
        </div>
    )
}