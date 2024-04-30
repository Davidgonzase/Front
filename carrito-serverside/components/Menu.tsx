import { FunctionComponent } from "preact";


const Menu: FunctionComponent = (props) =>{
    return(
        <div class="menu">
            <a value={"Breakfasts"} >Breakfasts</a>
            <a value={"Luncheons"} >Luncheons</a>
            <a value={"Shopping cart"} >Shopping cart <div class="quantity">-</div></a>
        </div>
    )
}

export default Menu;