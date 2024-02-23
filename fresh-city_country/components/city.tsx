import { FunctionComponent,JSX} from "preact";

type cityprops = {
    nombre:string
    population:string,
    latitude:string,
    longitude:string,
    capital:string
};

const city: FunctionComponent<cityprops> = (props) : JSX.Element  => {
    const {nombre,population,latitude,longitude,capital} = props;
    return (
        <>
        <div> <br><menu>
         <li><b>{`${nombre}`}</b></li> 
        <p>Country : <a href={`/country/${nombre}`}>{`${nombre}`}</a></p>
        <p>Population : {`${population}`}</p>
        <p>Latitude : {`${latitude}`}</p>
        <p>Longitude : {`${longitude}`}</p>
        <p>Capital : {`${capital}`}</p>
        </menu> </br>
        </div>
        </>
    )
};

export default city;






