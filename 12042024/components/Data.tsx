import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type context = {
    nombre:Signal<string>,
    apellido:Signal<string>
}

const Data : FunctionComponent<context> = (props) => {
    const {nombre,apellido} = props
    return(
        <>
            <input type="Name" value={nombre.value} name="Name" onInput={(e)=>nombre.value=e.currentTarget.value}></input>
            <input type="Apellido" value={apellido.value} name="Apellido" onInput={(e)=>apellido.value=e.currentTarget.value}></input>
        </>
    )
}

export default Data;