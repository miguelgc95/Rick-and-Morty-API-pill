import { Season } from "../store/season.js";
import { renderChaptersToSidebar, rendersidebarContent } from "../view/render.js";

export function chapterRequest () {
    const url = `https://rickandmortyapi.com/api/episode?page=1`;
    axios.get(url)
    .then(response => {
        console.log(response);
    }).catch(e => {
        console.log(e);
    })
}

export function seasonRequest(seasonCounter) {
    const communURL = "https://rickandmortyapi.com/api/episode?episode=S0";
    const URL = communURL+seasonCounter;
    return axios.get(URL)
    .then((response) => {
        let season = new Season(seasonCounter, response.data);
        rendersidebarContent(season.html);
        seasonCounter++;
        seasonRequest(seasonCounter)
        return response;
    }).catch(error => {
        console.log("zacaborbalon", error);
    })
}