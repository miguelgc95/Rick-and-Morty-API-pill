import { Episode } from "../store/Episode.js";
import { Season } from "../store/Season.js";
import { Character } from "../store/Character.js"
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

export function requestcharacterFromAnEpisode(thisEpisode) {
    let requestCharacters = thisEpisode.characters.map(character => {
        return axios.get(character)
    })
    axios.all(requestCharacters).then((response) => {
        response.forEach(character => {
            let newCharacter = new Character(character.data);
            newCharacter.htmlForChapter
        });
    }).catch(error => {
        console.log(error);
    })
}
