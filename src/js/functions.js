const POKE_APY ="https://pokeapi.co/api/v2/pokemon"

function saludoPersona(nombreP){
    return "hola, "+nombreP
}

const ejecutarSaludo = saludoPersona("Jhoe Doe");
console.log(ejecutarSaludo);
console.log("Prueba");

async function obtenerPokemons(cantidad)
{
    console.log(`${POKE_APY}?limit=${cantidad}`)
    const pokemons_response=[];
    const response = await fetch(`${POKE_APY}?limit=${cantidad}`);
    console.log(response)
    const pokemon = await response.json();
    console.log(pokemon);
    // recorrer todos los pokemos que nos devuelve la api 
    for (let i = 0; i < cantidad; i++) {
       
        pokemons_response.push(pokemon.results[i])
    }
    return pokemons_response;
}


async function obtenerPokemon(id){
    const response = await fetch(`${POKE_APY}/${id}`);
    const pokemon = await response.json();
    console.log(pokemon)
    return pokemon.name
    // console.log(pokemon.name)
    // console.log(pokemon.abilities[0].ability.name)
    // return pokemon;
}

