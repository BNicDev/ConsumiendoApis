function render(pokemonData){
     const contenedor = document.getElementById('pokemon-list');
    const elementos = pokemonData.map(u => `<li id = 'pokemon-item' >${u.name}</li>`);
    contenedor.innerHTML = elementos.join('');
}


function fetchPokemon(){
    //consumiendo api

const url = 'https://pokeapi.co/api/v2/pokemon';

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
})

.then(data => {
    // console.log(contenedor)
    const datos = data.results
    render(datos)
})
}

fetchPokemon()