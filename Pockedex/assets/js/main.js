const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li id="datailPokemon" class="pokemon ${pokemon.type}" onclick="closePokemon()">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
        <li>
            <div class="">
                <ol class="">
                    <span style="display: block;">"Altura: ${pokemon.height}" </span>
                    <span style="display: block;">"Luta:  ${pokemon.weight}"</span>
                    <span>"Habilidades:  ${pokemon.abilities}"</span>
                </ol>
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
/*
function closePokemon (pokemon) {
    return `
        <li id="datailPokemon" class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
            <div class="">
                <ol class="">
                   <span>"Altura: ${pokemon.height}" </span>
                   <span>"Luta:  ${pokemon.weight}"</span>
                    <span>"Habilidades:  ${pokemon.abilities}"<?span>
                </ol>
            </div>
        </li>
    `
}
*/