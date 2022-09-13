import React, {useState} from "react";
import {useForm} from "react-hook-form";

function Form(){
    const [agree, toggleAgree] = useState(false);
    const { register,handleSubmit } = useForm();
    function onFormSubmit(data){
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onFormSubmit)} >
            <label htmlFor="Voornaam">Voornaam
                <input type="text"
                       id="Voornaam"
                       {...register("name")}
                />
            </label><br/>
            <label htmlFor="Achternaam">Achternaam
                <input type="text"
                       id="Achternaam"
                       {...register("lastName")}
                />
            </label><br/>
            <label htmlFor="Leeftijd">Leeftijd
                <input type="number"
                       id="Leeftijd"
                       placeholder="0"
                       {...register("age")}
                />
            </label><br/>
            <label htmlFor="Postcode">Postcode
                <input type="text"
                       id="Postcode"
                       {...register("adres")}
                />
            </label><br/>
            <label htmlFor="select">Bezorgfrequentie <br/>
                <select name="select" id="select" {...register("forWhen")}>
                    <option value="Iedere week">Iedere week</option>
                    <option value="Om de week">Om de week</option>
                    <option value="Iedere maand">Iedere maand</option>
                </select>
            </label><br/>
            <input type="radio" name="dag" id="overdag" {...register("dayTime")}/>
            <label htmlFor="overdag">Overdag</label>
            <input type="radio" name="dag" id="avond" {...register("dayTime")}/>
            <label htmlFor="avond">'s Avonds</label><br/>
            <label htmlFor="textarea">Opmerking</label><br/>
            <textarea name="opmerking" id="textarea" cols="40" rows="7"  {...register("textarea")}></textarea><br/>
            <input type="checkbox" onClick={()=> toggleAgree(!agree)} {...register("agree")}/>
            <label htmlFor="checkbox"
            >Ik ga akkoord met de voorwaarden</label><br/>
            <button className="sendbtn" type="submit" disabled={!agree}>Verzend</button>
        </form>
    );
}
export default Form;