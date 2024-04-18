import { Signal, useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import City from "../components/City.tsx";
import Data from "../components/Data.tsx"
import Country from "../components/Country.tsx"

const Carrrito: FunctionComponent = () =>{
    const nombre = useSignal<string>("")
    const apellidos = useSignal<string>("")
    const pais = useSignal<string>("")
    const ciudad = useSignal<string>("")

    return(
        <div>
            <Data nombre={nombre} apellido={apellidos}/>
            <Country pais={pais}/>
            <City pais={pais} ciudad={ciudad}/>
        </div>
    )
}

export default Carrrito;