import AnimalModel from "./model/AnimalModel";
type Params = {
    animal: AnimalModel
}

function Animal(params: Params){
    return <p>
        {params.animal.id} | {params.animal.age} | {params.animal.name} 
    </p>
}

export default Animal;