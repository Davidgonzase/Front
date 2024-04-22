import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Cart } from "../types.ts"

type context = {
    page:Signal<Pages>,
    cart:Signal<Cart>
}


const Menu: FunctionComponent<context> = (props) =>{
    const {page,cart} = props
    if(IS_BROWSER){
        return(
            <div class="menu">
                <div value={"Breakfasts"} class={page.value==Pages.BREAKFAST? "selected" : ""} onClick={(e)=>page.value=Pages.BREAKFAST}>Breakfasts</div>
                <div value={"Luncheons"} class={page.value==Pages.LUNCHEONS? "selected" : ""} onClick={(e)=>page.value=Pages.LUNCHEONS}>Luncheons</div>
                <div value={"Shopping cart"} class={page.value==Pages.CART? "selected" : ""} onClick={(e)=>page.value=Pages.CART}>Shopping cart <div class="quantity">{cart.value.number}</div></div>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default Menu;