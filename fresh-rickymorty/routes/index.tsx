import Axios from "npm:axios";

type character = {
  id : number,
  name: string
}

type data = {
  results : character[]
}

type pagenum = {
  pages : number
}

export default async function Home() {
  try {
    const datnum = await Axios.get<pagenum>("https://rickandmortyapi.com/api/character");
    let char:data[] = []
    for(let i=0;i<datnum.data.info.pages;i++){
      char.push((await Axios.get<data>(`https://rickandmortyapi.com/api/character?page=${i+1}`)).data)
    }
    return (
      <div>
        <h1>Personajes de rick & morty </h1>
        {char.map(i=>i.results.map(i=>{
          return <br><a href={'http://localhost:8000/character/'+i.id} >{i.name}</a></br>
        }))}
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
