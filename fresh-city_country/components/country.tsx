import { FunctionComponent,JSX} from "preact";

type countryprops = {
    nombre:string
    capital:string,
    population:string,
    region:string,
    moneda:string
};

const Country: FunctionComponent<countryprops> = (props) : JSX.Element  => {
    const {nombre,population,region,moneda,capital} = props;
    return (
        <>
        <div> <br><menu>
        <li><b>{`${nombre}`}</b></li> 
        <p>Capital : <a href={`/city/${capital}`}>{`${capital}`}</a></p>
        <p>Population : {`${population}`}</p>
        <p>Region : {`${region}`}</p>
        <p>Moneda : {`${moneda}`}</p>
        </menu> </br> </div>
        </>
    )
};

export default Country;

