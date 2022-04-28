const NavButton = ({Url,clickEvent}) => {
    return (
        <footer>
            <button id="MenuButton" onClick={() => clickEvent(true)}><div id="ButtonColor"><img src={Url} alt="" /></div></button>
        </footer>
            )
    }
    export default NavButton;