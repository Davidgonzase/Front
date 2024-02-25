import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../../components/Character.tsx";

type character = {
    id : string,
    name: string,
    image: string,
    status: string
  }
  
type data = {
    page : string
    results : character[]

}  

export const handler:Handlers = {
    GET: async (_req:Request,ctx:FreshContext<unknown,data>) => {
        const {page} = ctx.params
        const res:data = await (await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)).json() as data
        return ctx.render({page,res})
    },
}

const Page = (props:PageProps<data>) =>{
    try {
        const {page,res} = props.data;
        
        return (
          <div>
            <div class="frontext">
                <h1 >Personajes de rick & morty </h1>
                <div class="frontbuttons">
                  {Number(page)>1&&<a href={`${Number(page)-1}`}><button class="buttonbs">Anterior</button></a>}
                  {Number(page)<42&&<a href={`${Number(page)+1}`}><button class="buttonbs">Siguiente</button></a>}
                </div>
            </div>
            <div class="characters">
            {res.results.map(i=>(<Character name={i.name} img={i.image} status={i.status} id={i.id}/>))}
            </div>
          </div>
        );
      } catch (error) {
        return (
          <div>
            Ha ocurrido un error
          </div>
        );
      }
}

export default Page;