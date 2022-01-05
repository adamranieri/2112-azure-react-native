import { useState } from "react"


export default function PokeViewer(){

    const [poke,setPoke] = useState<any>({});

    async function getThatPokemon(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const pokemon = await response.json()
        setPoke(pokemon)
    }

    return(<>

    <h4>Name {poke.name}</h4>
    <h4>Height {poke.height}</h4>
    <button onClick={getThatPokemon}> Get that Pokemon!</button>

    </>)
}