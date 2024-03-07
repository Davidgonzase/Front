import { FunctionComponent,JSX} from "preact";

type Contactprops = {
    nombre:string
    telephone:string,
};

const Result: FunctionComponent<Contactprops> = (props) : JSX.Element  => {
    const {nombre,telephone} = props;
    return (
        <>
        <div class="contact">{nombre} / {telephone}</div>
        </>
    )
};

export default Result;

