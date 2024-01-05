import { useEffect, useState } from "react";
import Animal from "./Animal";
import AnimalModel from "./model/AnimalModel";
import axios from "axios";

function Animals(){
    let [animals, setAnimals] = useState(Array.from<AnimalModel>([]))

    async function getAnimals(){
        let {data, status} = await axios.get<AnimalModel[]>("https://localhost:7190/Animal");
        setAnimals(data);
    }

    useEffect(() => {
        getAnimals();
    }, [])

    return <>
        { animals.map(animal => <Animal animal={animal}/>) }   
    </>
}

export default Animals;