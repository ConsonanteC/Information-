const URLapi:string = "https://api.thecatapi.com/v1/images/search?limit=10";

const containerCards = document.querySelector("#output-list") as HTMLUListElement;

document.addEventListener("DOMContentLoaded", () => {
    showCharacters();
})

async function getCharacters(url: string): Promise<any> {
    const response = await fetch(url);
    const data = response.json();
    return data
} 

async function showCharacters(): Promise<void> {
    getCharacters(URLapi)
    .then(data => {
        data.forEach((cat: any) => {
            const catsCard = document.createElement("li") as HTMLLIElement;
            const img = document.createElement("img") as HTMLImageElement;

            // acá introduzco los valores del gato en mi variable img
            img.src = cat.url;
            img.alt = cat.id;
            
            catsCard.append(img);
            containerCards.appendChild(catsCard);
        })
    })
    .catch(error => {
        console.error(`There is an error on GET ${error}`)
    })

}

// ESTA FUNCIÓN ESTÁ BIEN PERO NO QUIERO USAR "TRY CATCH" JAJAJAJ
// async function showCharacters(): Promise<void> {
//     try {
//         const data = await getCharacters(URLapi);
        
//         data.forEach((cat: any) => {
//             const li = document.createElement('li');
//             const img = document.createElement('img');
//             img.src = cat.url;
//             img.alt = cat.id;

//             li.appendChild(img);
//             ul.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error al mostrar los datos:', error);
//     }
// }



    
