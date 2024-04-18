import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

const Country : FunctionComponent<{pais:Signal<string>}> = ({pais}) => {
    let res;
    pais.value==""? res="Introduce el pais" : res=pais.value
    return(
        <form action="#">
            <label for="lang">Pais</label>
            <select name="Paises" id="lang" value={res} onChange={(e)=>pais.value=e.currentTarget.value}>
                <option value="España" >España</option>
                <option value="Francia" >Francia</option>
                <option value="Estados Unidos" >Estados Unidos</option>
                <option value="Alemania" >Alemania</option>
            </select>
        </form>
    )
}

export default Country;