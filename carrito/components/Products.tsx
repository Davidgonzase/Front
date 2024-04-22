import { FunctionComponent } from "preact";
import { Signal, useSignal } from "@preact/signals";
import { Cart, response } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

type context = {
    cart:Signal<Cart>,
    url:string
}

const Products:FunctionComponent<context> = (props) =>{
    const items = useSignal([])
    const {cart,url} = props

    useEffect(async () => {
        items.value = await (await fetch(url)).json() as response[]
      }, []);

    
    const additem = (cart:Signal<response[]>,item:response) =>{
        
    }

    const getitems=()=>{
        const data = items.value as response []
        return data.map((elem)=>{
            return(
                <div class="item">
                    <span class="name">{elem.name}</span>
                    <span class="price">{elem.price}$</span>
                    <img src={elem.image} alt={elem.name}/>
                    <span class="description">{e.description}</span>
                    <span class="add" onClick={additem(cart,elem)}>+</span></div>
            )
        })
    }
    if(IS_BROWSER){
        return(
            <div class="products">
                <h1>Products</h1>
                {items.value.length != 0 && getitems()}
            </div>
        )
    }else{
        return(
            <>
            </>
        )
    }
}

export default Products;