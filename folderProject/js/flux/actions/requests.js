import { Episode } from "../store/Episode.js";
import { Season } from "../store/Season.js";
import { rendersidebarContent } from "../view/render.js";

export function chapterRequest (url) {
    return axios.get(url)
    .then(response => {
        let episode = new Episode(response.data);
        episode.html
    }).catch(error => {
        console.log("capitulo de mierda", error);
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
