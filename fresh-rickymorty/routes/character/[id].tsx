

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type results = {
    id : string,
    name: string,
    status: string,
    species: string,
    location: string,
    image: string
}

export const handler:Handlers = {
        GET:async (_req:Request,ctx:FreshContext<unknown,results>) => {
        try{
            const {id} = ctx.params
            let res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            res = await res.json()
            if(res.error)throw new Error("Pagina no encontrada")
            return ctx.render({
                id,
                name: res.name,
                status: res.status,
                species: res.species,
                location: res.location.name,
                image: res.image
            })
        }catch(error){
            return ctx.render()
        }}
}

const Page = (props:PageProps<results>) =>{
    const {id,name,status,species,location,image} = props.data;
        let stat
        if(status=="Alive"){stat="color:green"}else stat= "color:red" 
        return <div class="center"><h1>{id} {name}</h1> <h2>Especie : {species}</h2> <h2>Localizacion : {location}</h2> <h2>Status <text style={stat}>{status}</text> <p>Imagen</p> <img src={image} class="centerimg"></img> </h2></div>
    
}

export default Page;