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

        </section>
     );
}
 
export default NavButton;