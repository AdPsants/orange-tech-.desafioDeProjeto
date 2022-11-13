
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit${limit}`;

function converterPokemonToLi(pokemon){
    return `
        <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poision</li>
            </ol>
            
            <img src="https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png" alt="${pokemon.name}">
        </div>
        </li>
    `
}
const pokemonList = document.getElementById('pokemonList');


fetch(url)
    .then( (response) => response.json())
    .then( (jsonBody) => jsonBody.results)
    .then( (pokemons) =>  {
        
        for (let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML += converterPokemonToLi(pokemon)
            
        }

    })
    .catch( (error) => console.log(error))        



