function render(character) {
    const contenedor = document.getElementById('cards');
    cards(character);
}

function cards(character) {
    const contenedor = document.getElementById('cards');
    const elementos = character.map(u =>
        `
        <div class="card">
            <div class="card-header">
                <img src="${u.image}" alt="${u.name}">
            </div>
            <div class="card-body">
                <h2>${u.name}</h2>
                <p>${u.status} - ${u.species}</p>
                <p>${u.species}</p>
            </div>
        </div>        
        `);
    contenedor.innerHTML = elementos.join('');
}

let charactersData = [];

function fetchRM(){
    const url = 'https://rickandmortyapi.com/api/character';

    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('ERROR!');
        }
        return response.json();
    })

    .then(data =>{
        charactersData = data.results
        render(charactersData)
    })
}
fetchRM();

function searchCharacters(query) {
    const filtered = charactersData.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
    );
    render(filtered);
}

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('input', ()=>{
    const query = searchInput.value;
    searchCharacters(query);
})

searchButton.addEventListener('click', () =>{
    const query = searchInput.value;
    searchCharacters(query);
})
