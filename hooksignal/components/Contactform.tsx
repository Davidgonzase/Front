import { Signal } from "@preact/signals-core";
import { FunctionComponent } from "preact";
import { Error,User, usuarios } from "../islands/Addjobs.tsx"
import { IS_BROWSER } from "$fresh/runtime.ts"

type context = {
    mail: Signal<string>,
    name: Signal<string>,
    error: Signal<Error>
    users: Signal<User[]>
}

const Contactform : FunctionComponent<context> = (props) => {
    const {mail,name,error,users} = props

    const verify = (nmail:string , users : User[]) => {
        if(!nmail.includes("@")){
            error.value = ({
            error:true,
            message:"Falta @"
            });
        }else if(!nmail.includes(".")){
            error.value = ({
            error:true,
            message:"Falta ."
            });
        }else if(users.find((e)=>e.mail==nmail)){
            error.value=({
            error:true,
            message:"El correo ya existe"
            });
        }else{
          console.log(users.find((e)=>e.mail==nmail))
            error.value =({
            error:false,
            message:""
            });
        }
        mail.value=nmail;
    };
    
    const  add = (mail:string,name:string,users:Signal<User[]>) => {
        verify(mail,users.value)
        if(!error.value.error){
            users.value=[...users.value,{name,mail}]
        }
    }

    if(IS_BROWSER){
        return(
            <div class="agendaForm">
              <h2>Añadir contacto</h2>
              <input type="email" placeholder="Email" value={mail.value} name="email" onInput={(e)=>verify(e.currentTarget.value,users.value)}></input>
              <input type="name" placeholder="Nombre" value={name.value} onInput={(e)=> name.value=e.currentTarget.value}></input>
              <button class="inputbut" onClick={(e)=>add(mail.value,name.value,users)} disabled={error.value.error || name.value=="" || mail.value==""}>Submit</button>
              <text style="color:red">{error.value.message}</text>
            </div>
        )
    }else{
        return null;
    }
}

export default Contactform;