import { Signal } from "@preact/signals-core";
import { FunctionComponent } from "preact";
import { User,usuarios} from "../islands/Addjobs.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts"

const Contacts : FunctionComponent<{users:Signal<User[]>}> = ({users}) => {
    const  show = (users:User[]) => {
        return <ul>{users.map((i)=><li><span>{i.name}</span>        <span>{i.mail}</span></li>)}</ul>
    };
    if(IS_BROWSER){
        return(
            <div>
                {users.value.length>0&&<div class="contc"><h1>Contactos</h1>{show(users.value)}</div>}
            </div>
        );
    }else{
        return null;
    }
}

export default Contacts;