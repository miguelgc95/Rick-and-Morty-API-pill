import { chapterRequest } from "../actions/requests.js";


export function rendersidebarContent (seasonDiv) {
    document.getElementsByClassName("sidebar")[1].appendChild(seasonDiv);
}

export function renderChaptersToSidebar (where, what) {
    where.appendChild(what);
}

export function showSeasonChapters(event) {
    event.target.nextSibling.classList.toggle("hidden")
}

export function showSpecificChapter(event) {
    let url = event.target.getAttribute("url");
    chapterRequest(url);
    document.getElementById("episode").innerHTML = '';
    document.getElementById("character").innerHTML = '';
    document.getElementsByClassName("center")[0].classList.add("hidden")
}

export function changeTitle(newTitle) {
    document.getElementsByTagName("h1")[0].innerHTML = newTitle;
}

export function renderCharacterBasics(node) {
    document.getElementById("episode").appendChild(node)
}

export function renderTheCharacter(characterObject) {
    characterObject.changeTitle;
    document.getElementById("episode").innerHTML = '';
    let node = characterObject.htmlForCharacter;
    document.getElementById("character").appendChild(node);
    if (characterObject.name ==="Evil Morty") {
        console.log("entro");
        document.getElementById("character").insertAdjacentHTML('beforebegin', `<audio src='/assets/audio/Evil-morty-cut.m4a' autoplay="autoplay"></audio>`)
    }
}