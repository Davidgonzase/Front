import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { response } from "../types.ts" 
import { cartSize } from "../signal.ts";

type context={
    elem:response
}

const Buttonad:FunctionComponent<context>= (props) =>{
    const {elem} = props
    const addelem = () =>{
        const cookie = document.cookie
        if(!cookie.includes("Cart=")){
            const newCart = [{name:elem.name,description:elem.description,id:elem.id,price:elem.price,image:elem.image,number:1}]
            document.cookie = "Cart="+JSON.stringify(newCart)
        }else{
            const obj = cookie.split(";").find( c => c.startsWith("Cart="));
            const currentCart:response[] = JSON.parse(obj.substring(5))
            const currentProduct = currentCart.find(p=> p.id===elem.id)
            if(currentProduct){
                currentProduct.number+=1
                document.cookie = "Cart="+JSON.stringify(currentCart)
            }else{
                currentCart.push({name:elem.name,description:elem.description,id:elem.id,price:elem.price,image:elem.image,number:1})
                document.cookie = "Cart="+JSON.stringify(currentCart)
            }
        }
        cartSize.value+=1
    }
    return(
        <>
        <span class="add" onClick={()=>addelem()}>+</span>
        </>
    )
}

export default Buttonad