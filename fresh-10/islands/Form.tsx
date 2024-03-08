import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Error = {
  error: boolean;
  message: string;
};

export const Form: FunctionComponent = () => {
  let boolean = true
  const [error, setError] = useState<Error>({
    error: false,
    message: "",
  });
  const [error2, setError2] = useState<Error>({
    error: false,
    message: "",
  });
  const [error3, setError3] = useState<Error>({
    error: false,
    message: "",
  });

  const checkAge = (value: number) => {
    if(!value){
      setError({
        error: true,
        message: "Faltan Edad",
      });
    }
    if (value < 18) {
      setError({
        error: true,
        message: "You must be older than 18",
      });
    } else {setError({
        error: false,
        message: "",
      });}
  };

  const check2 = (value:string) =>{
    if(!value){
      setError2({
        error: true,
        message: "Falta nombre",
      });
    } else {setError2({
        error: false,
        message: "",
      });}
  }
  const check3 = (value:string) =>{
    if(!value){
      setError3({
        error: true,
        message: "Falta correo",
      });
    } else {setError3({
        error: false,
        message: "",
      });}
  }

  return (
    <div class="form"  >
      <h1>Introduce tus datos</h1>
      <form action="/submitform.tsx" method="POST" >
        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input type="text" id="name" name="name" onInput={(e) =>check2(e.currentTarget.value)}/>
        </div>

        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input type="email" id="email" name="email" onInput={(e) =>check3(e.currentTarget.value)}/>
        </div>

        <div>
          <label for="age">Age</label>
        </div>
        <div>
          <input
            type="number"
            id="age"
            name="age"
            onInput={(e) => checkAge(Number(e.currentTarget.value))}
          />
        </div>
        <div>
          <button onBeforeInput={(e)=>boolean=false} disabled={error.error || error2.error || error3.error || !boolean} type="submit" class="btn">
            Submit
          </button>
        </div>
        <div>
          <button type="reset" class="reset">
            Reset
          </button>
        </div>
        {error2.error && <div class="span-2 error">{error2.message}</div>}
        {error3.error && <div class="span-2 error">{error3.message}</div>}
        {error.error && <div class="span-2 error">{error.message}</div>}
      </form>
    </div>
  );
};

export default Form;
