import { NavLink } from "react-router-dom";
import { BusTimes } from "../Bus/Bus";
import Home from "../../Pages/Home/Home";
import './Navigation.scss'
import { Food } from "../Food/food";
import Enterainment from "../Entertainment/Entertainment";
import StudentCouncil from "../StudentCouncil/StudentCouncil";
import Guides from "../Guides/Guides";
import Map from "../Guides/Map"
import Rules from "../Guides/Rules";
import SocialHUB from "../SocialActivities/SocialHUB";
import EventsDetails from "../SocialActivities/EventsDetails";



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
     // <Food /> er custom element 
    {
        title: 'Kantine',
        path: "/food",
        element: <Food />,
        display: true
    },
    // <Enterainment /> er custom element 
    {
        title: 'Underholdning',
        path: "/enterainment",
        element: <Enterainment />,
        display: true
    },
    // <StudentCouncil /> er custom element 
    {
        title: 'Elevråd',
        path: "/studentCouncil",
        element: <StudentCouncil />,
        display: true
    },
    // <Guides /> er custom element 
    {
        title: 'Guides',
        path: "/guides",
        element: <Guides />,
        display: true
    },
    // <SocialActivities /> er custom element 
    {
        title: 'SocialHUB',
        path: "/socialHUB",
        element: <SocialHUB />,
        display: true
    },
    // <Map /> er custom element 
    {
        title: 'Map',
        path: "/map",
        element: <Map />,
        display: false
    },
    // <Rules /> er custom element 
    {
        title: 'Rules',
        path: "/rules",
        element: <Rules />,
        display: false
    },
    // <EventsDetails /> er custom element 
    {
        title: 'EventsDetails',
        path: "/eventsDetails",
        element: <EventsDetails />,
        display: false
    },
    
]



// Nav element 
// laver menuen med navArrList
export const Nav = props => {
    return (
        <nav>
            <ul>
                {navArrList.map((item, key) => {
                    return (
                        item.display ?
                            <li key={key} className="navList" >
                                {/*NavLink er components til navigation fra react router dom  */}
                                <NavLink to={item.path}> {item.title}  </NavLink>
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
        <div className="navModal" >
            <div className="modalBody" onClick={props.onClose}>
                <Nav />
            </div>
        </div>
    )
}
