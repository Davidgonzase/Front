import { FunctionComponent } from "preact";
import Menu from "../components/Menu.tsx";
import { Signal, useSignal } from "@preact/signals";
import { Pages } from "../types.ts";
import Products from "../components/Products.tsx";
import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Cart from "../components/Cart.tsx";

const Mainpage: FunctionComponent = () =>{
    const url1="https://shop-products.deno.dev/products/breakfast"
    const url2="https://shop-products.deno.dev/products/lunch"
    const page = useSignal(Pages.BREAKFAST)
    const cart = useSignal({
        total:0,
        number:0,
        items:[]
    })



    if(IS_BROWSER){
        return(
            <>
            <Menu page={page} cart={cart}></Menu>
            {page.value === Pages.BREAKFAST && <Products cart={cart} url={url1}/>}
            {page.value === Pages.LUNCHEONS && <Products cart={cart} url={url2}/>}
            {page.value === Pages.CART && <Cart cart={cart}/>}
        </>
        )
    }else {
        return(
            <>
            </>
        )
    }
}

export default Mainpage;