"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URLapi = "https://api.thecatapi.com/v1/images/search?limit=10";
const containerCards = document.querySelector("#output-list");
document.addEventListener("DOMContentLoaded", () => {
    showCharacters();
});
function getCharacters(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = response.json();
        return data;
    });
}
function showCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        getCharacters(URLapi)
            .then(data => {
            data.forEach((cat) => {
                const catsCard = document.createElement("li");
                const img = document.createElement("img");
                // acá introduzco los valores del gato en mi variable img
                img.src = cat.url;
                img.alt = cat.id;
                catsCard.append(img);
                containerCards.appendChild(catsCard);
            });
        })
            .catch(error => {
            console.error(`There is an error on GET ${error}`);
        });
    });
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
