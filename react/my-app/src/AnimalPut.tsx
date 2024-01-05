import { useState } from "react";
import AnimalModel from "./model/AnimalModel";
import axios from "axios";

function AnimalPut(){
    let [id, setId] = useState(0);
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);

    async function submitMethod(){
        await axios.put("https://localhost:7190/Animal", {id: id, name: name, age: age})
    }

    return <>
        <form onSubmit={submitMethod}>
            Id: <input name="id" type="number" value={id} 
                onChange={(e) => setId(Number(e.target.value))}/><br/>
            Name: <input name="name" type="text" value={name} 
                onChange={(e) => setName(e.target.value)}/><br/>
            Age: <input name="age" type="number" value={age} 
                onChange={(e) => setAge(Number(e.target.value))}/><br/>
            <br/>
            <input type="submit"/>
        </form>
    </>
}

export default AnimalPut;