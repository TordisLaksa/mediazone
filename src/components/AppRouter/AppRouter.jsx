import { Route, Routes } from "react-router-dom"
import { navArrList } from "../../Assets/Data/Navigation"

const AppRouter = () => {
    return(
        //Routes kommer fra  React router dom
        <Routes>
            {navArrList.map ((item, key) => {
                return(
                    //Route kommer fra  React router dom
                    <Route key={key} path={item.path} element={item.element}></Route>
                )
            })}

        </Routes>
    )
}
export default AppRouter