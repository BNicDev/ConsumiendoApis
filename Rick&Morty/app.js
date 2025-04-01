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
        const datos = data.results
        console.log(datos)
        render(datos)
    })
}
fetchRM()