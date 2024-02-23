import Axios from "npm:axios";
import dataDir from "https://deno.land/x/dir@1.5.1/data_local_dir/mod.ts";
import Character from "../../components/Character.tsx";

type character = {
  id : string,
  name: string,
  image: string,
  status: string
}

type data = {
  results : character[]
}


export default async function Home() {
  try {
    const res = await (await fetch(`https://rickandmortyapi.com/api/character?page=1`)).json() as data
    return (
      <div>
        <h1 class="centertext">Personajes de rick & morty </h1>
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
