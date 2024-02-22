import { FunctionComponent } from "preact";

type characterprops = {
    name: string;
    id:string
}

const characters : FunctionComponent<characterprops> = (props) => {
    const {name,id} = props
    return(
        <br>
        <a href={'http://localhost:8000/character/'+id}>{name}</a>
        </br>
    )
};

export default characters;