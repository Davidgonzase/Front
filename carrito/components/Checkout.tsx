import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal, useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Checkout:FunctionComponent<{total:number}> = ({total}) =>{ 
    const countries = useSignal<string[]>([])
    const [cities,setCities] = useState<string[]>([])
    const [city,setCity] =  useState<string>("")
    const [country,setCountry] = useState<string>("")
    useEffect(()=>{
        fetch("https://api.first.org/data/v1/countries").then(response=>response.json()).then(data =>{Object.keys(data.data).forEach((key) => {countries.value.push(data.data[key].country)}); setCountry(countries.value[0])})
    },[])
    useEffect(()=>{
        let first:boolean=true
        if(country!=""){
            fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: 'POST', // Use POST method for sending data
            headers: {
              'Content-Type': 'application/json', // Set header to indicate JSON data
            },
            body: JSON.stringify({ country })
        }).then(response=>response.json()).then(data=>{setCities(data.data);if(first){first=false;setCity(data.data[0])}})
        }
    },[country])
    
    if(IS_BROWSER){
        return(
            <div class="checkout"> 
                <h1>Checkout</h1>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"/>
                        <label for="address">Address</label>
                    <input type="text" id="address" name="address"/>
                        <label for="phone">Country</label>
                    <select id="country" name="country">
                        {countries && countries.value.map((e)=>{return(<option value={e}  onClick={(event)=>setCountry(e)}>{e}</option>)})}
                    </select>
                    <label for="city">City</label>
                        <select id="city" name="city">
                            {cities && cities.map((e)=>{return(<option value={e} onClick={(event)=>setCity(e)}>{e}</option>)})}
                        </select>
                    <label for="payment">Payment method</label>
                        <select id="payment" name="payment">
                            <option value="Card">Card</option>
                            <option value="Pay Pal">Pay Pal</option>
                        </select>
                    <div class="total">{total.toFixed(2)}</div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }else {
        return(
            <>
            </>
        )
    }
}

export default Checkout