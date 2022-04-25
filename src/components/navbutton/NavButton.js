import ButtonIcon from "./Button-icon";
import bus from "./icons/BUS.png";
import cutlery from "./icons/cutlery.png";
import friendship from "./icons/FRIENDSHIP.png";
const NavButton = () => {
    return ( 
        <section>
            <div class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
        <label class="menu-open-button" for="menu-open">
        </label>
        <ButtonIcon url={bus}/>
        <ButtonIcon url={cutlery}/>
        <ButtonIcon url={friendship}/>        
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
        <filter id="shadowed-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feComposite in2="shadow" in="goo" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        </defs>
    </svg>
        </section>
     );
}
 
export default NavButton;