await fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ha ocurrido un error con la respuesta' + response.statusText);
        };
        return response.json();
    })
    .then(data => {
        const characterContainer = document.getElementById('output-list');
        data.results.forEach(character => {
            const characterCard = document.createElement('li');
            characterCard.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p>Estado: ${character.status}</p>
                <p>Especie: ${character.species}</p>
                <p>Género: ${character.gender}</p>
            `;
            characterContainer.appendChild(characterCard);
        });
    })
    .catch(error => {
        console.error('Ha ocurrido un problema :(', error);
    });
