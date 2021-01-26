

export function rendersidebarContent (seasonDiv) {
    document.getElementsByClassName("sidebar")[0].appendChild(seasonDiv);
}

export function renderChaptersToSidebar (where, what) {
    where.appendChild(what);
}

export function showSeasonChapters() {
    console.log("wee");
}

export function showSpecificChapter() {
    console.log("wii");
}