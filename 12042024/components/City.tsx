import { FunctionComponent } from "preact";
import { Signal, useSignalEffect } from "@preact/signals";
import { useEffect } from "preact/hooks";

type context = {
    pais:Signal<string>,
    ciudad:Signal<string>
}

const City : FunctionComponent<context> = (props) => {
    
    const {pais,ciudad} = props
    useEffect(()=>{
        if(!ciudades[pais.value as "España" | "Francia" | "Estados Unidos" | "Alemania"].includes(ciudad.value)){
            ciudad.value = ciudades[pais.value as "España" | "Francia" | "Estados Unidos" | "Alemania"][0]
        }
    }, [pais.value])
    const show = (pais:string,ciudad:Signal<string>) => {
        console.log(pais)
        if(pais=="España"){
            return(
                <>
                <option value="Madrid" >Madrid</option>
                <option value="Barcelona" >Barcelona</option>
                <option value="Murcia" >Murcia</option>
                <option value="Badajoz" >Badajoz</option>
                </>
            )
        }else if(pais=="Francia"){
            return(
                <>
                <option value="Paris" >Paris</option>
                <option value="Marsella" >Marsella</option>
                <option value="Niza" >Niza</option>
                </>
            )
        }else if(pais=="Estados Unidos"){
            return(
                <>
                <option value="Los Angeles" >Los Angeles</option>
                <option value="Miami" >Miami</option>
                <option value="Seattle" >Seattle</option>
                </>
            )
        }else if(pais=="Alemania"){
            return(
                <>
                <option value="Bayern" >Bayern</option>
                <option value="Berlin" >Berlin</option>
                <option value="Dortmund" >Dortmund</option>
                </>
            )
        }

    }

    return(
        <form action="#">
            <label for="lang">Pais</label>
            <select name="Ciudad" id="lang" value={ciudad.value || "Escoge Ciudad" } onChange={(e)=>ciudad.value=e.currentTarget.value}>
                {show(pais.value,ciudad)}
            </select>
        </form>
    )
}

export default City;