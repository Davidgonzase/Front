import Axios from "npm:axios";

type character = {
  id : number,
  name: string
}

type data = {
  results : character[]
}

export default async function Home() {
  console.log("se hace")
  try {
    const res = await Axios.get<data>("https://rickandmortyapi/character");
    return (
      <div>
        <h1>Personajes de rick & morty </h1>
        {res.data.results.map(i=>{
          return <li key={i.id}>{i.name}</li>
        })}
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
