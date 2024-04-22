import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Cart } from "../types.ts"

type context = {
    cart:Signal<Cart>
}


const Cart: FunctionComponent<context> = (props) =>{
    const {cart} = props
    if(IS_BROWSER){
        return(
            <div class="products">
                <h1>Cart</h1>
                <div class="total">
                    <div class="total-text">Total:</div>
                    <div class="total-price">{cart.value.total}€</div>
                </div>
                <button class="checkout-button">Checkout</button>
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default Cart;