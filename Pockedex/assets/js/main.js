const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li id="datailPokemon" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div id="detail" class="detail" onclick="sumir()">
                <ol class="types" >
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})



function sumir(){
    function convertPokemonFullToLi (pokemon) {
        return `
            <li class="${pokemon.type} abilities" >
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div>
                    <ol>
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">    
                </div>
            </li>
            <li  class="class="${pokemon.type} abilities" style="border: 1px solid #000; border-radius: 5px;">    
                <div class="">
                    <ol>
                        <li>
                            <span>Altura: ${pokemon.height} cm </span><br>
                            <span>Luta:  ${pokemon.weight}</span><br>
                            <span>Habilidades:  ${pokemon.abilities}</span>
                        </li>
                    </ol>
                </div>
            </li>
        `
    }
    
    function loadPokemonAbilities(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newsHtml = pokemons.map(convertPokemonFullToLi).join('')
            pokemonList.innerHTML += newsHtml
        })
    }
    
    loadPokemonAbilities(offset, limit)
}


/*
loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonAbilities(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonAbilities(offset, limit)
    }
})
*/




