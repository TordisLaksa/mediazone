

const NavButton = ({Url,clickEvent}) => {
    return (
        <button id="MenuButton" onClick={() => clickEvent(true)}><div id="ButtonColor"><img src={Url} alt="" /></div></button>
            )
    }
    export default NavButton;