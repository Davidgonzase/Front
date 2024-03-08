import { FunctionComponent,JSX} from "preact";

type Formprops = {
    error?:string
};

const Form: FunctionComponent<Formprops> = (props) : JSX.Element  => {
    const {error} = props
    return (
      <div class="form">
        <h1>Introduce tus datos</h1>
        <form action="/submitform.tsx" method="POST">
          <div>
            <label for="name">Name</label>
          </div>
          <div>
            <input type="text" id="name" name="name" />
          </div>
  
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input type="email" id="email" name="email" />
          </div>
  
          <div>
            <label for="age">Age</label>
          </div>
          <div>
            <input
              type="number"
              id="age"
              name="age"
            />
          </div>
          <div>
            <button  type="submit" class="btn">
              Submit
            </button>
          </div>
          <div>
            <button type="reset" class="reset">
              Reset
            </button>
          </div>
          {error && <div class="span-2 error">{error}</div>}
        </form>
      </div>
    );
  };
  
export default Form;
  
