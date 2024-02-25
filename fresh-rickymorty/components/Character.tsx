import { FunctionComponent } from "preact";

type Characterprops = {
    id:string,
    name:string,
    status:string,
    img:string
}

const Character : FunctionComponent<Characterprops> = (props) => {
    const {id,name,status,img} = props
    return(
        <div class="character" >
            <a href={`/character/${id}`}>
                <button class="buttonchar">
                    <h2 class="centertext">{name}</h2>
                    <img src={img} class="centerimg"/>
                    <p class="centertext"><b>Status:</b> {status}</p>
                </button>
            </a>
        </div>

    )

}

export default Character;