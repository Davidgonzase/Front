import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Buttonad from "../islands/buttonadd.tsx";
import { response } from "../types.ts";

type context={
    arr:response[]
}

const Product:FunctionComponent<context> = (props) =>{
    const res = props.arr
    return(
            <>
                <div class="products">
                <h1>Products</h1>
                    {res.length != 0 &&  res.map((elem)=>{
                    return(
                        <div class="item">
                            <span class="name">{elem.name}</span>
                            <span class="price">{elem.price}$</span>
                            <img src={elem.image} alt={elem.name}/>
                            <span class="description">{elem.description}</span>
                            <Buttonad elem={elem}/>
                        </div>
                    )
                    })}
                </div>
            </>
        )
}

export default Product