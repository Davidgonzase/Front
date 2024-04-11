import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Contacts from "../components/Contacts.tsx";
import Contactform from "../components/Contactform.tsx";

export type Error = {
  error:boolean,
  message:string
}

export type User={
  name:string,
  mail:string
}


export const Addjobs :FunctionComponent = (props) => {
  const mail = useSignal<string>("")
  const name = useSignal<string>("")
  const error = useSignal<Error>({error:true,message:""})
  const users = useSignal<User[]>([])
  return(
    <>
      <Contacts users={users}/> 
      <Contactform mail={mail} name={name} error={error} users={users} />
    </>
  )
}


export default Addjobs;
