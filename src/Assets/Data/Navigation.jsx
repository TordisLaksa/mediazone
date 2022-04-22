import { NavLink } from "react-router-dom";
import { BusTimes } from "../../components/bus/bus";
import Home from "../../Pages/Home/Home";

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
export const Nav = () => {
    return(
        <nav>
            <ul>
                {navArrList.map((item, key) => {
                    return(
                        item.display? 
                        <li key={key}>
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