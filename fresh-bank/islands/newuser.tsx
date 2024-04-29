import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Formuser:FunctionComponent = () =>{
    const [nombre,setNombre] = useState<string>("");
    const [apellidos,setApellidos] = useState<string>("");
    const [calle,setCalle] = useState<string>("");
    const [telefono,setTelefono] = useState<string>("");
    return(
        <div class="form">
            <label>Nombre</label>
            <input type="nombre" name="nombre" value={nombre} onInput={(e)=>setNombre(e.currentTarget.value)}/>
            <label>Apellidos</label>
            <input type="apellidos" name="apellidos" value={apellidos} onInput={(e)=>setApellidos(e.currentTarget.value)}/>
            <label>Calle</label>
            <input type="calle" name="calle" value={calle} onInput={(e)=>setCalle(e.currentTarget.value)}/>
            <label>Telefono</label>
            <input type="telefono" name="telefono" value={telefono} onInput={(e)=>setTelefono(e.currentTarget.value)}/>
            <button>Solicitar</button>
        </div>
    )
}

export default Formuser;