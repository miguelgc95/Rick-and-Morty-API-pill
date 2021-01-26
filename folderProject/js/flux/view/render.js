import { chapterRequest } from "../actions/requests.js";


export function rendersidebarContent (seasonDiv) {
    document.getElementsByClassName("sidebar")[0].appendChild(seasonDiv);
}

export function renderChaptersToSidebar (where, what) {
    where.appendChild(what);
}

export function showSeasonChapters(event) {
    event.target.nextSibling.classList.toggle("hidden")
}

export function showSpecificChapter(event) {
    let url = event.target.getAttribute("url");
    chapterRequest(url)
}

export function changeTitle(newTitle) {
    document.getElementsByTagName("h1")[0].innerHTML = newTitle;
}