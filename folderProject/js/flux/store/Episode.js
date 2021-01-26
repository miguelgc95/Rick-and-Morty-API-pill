
import { requestcharacterFromAnEpisode } from "../actions/requests.js";
import { changeTitle } from "../view/render.js";

export class Episode {
    constructor (chapterFromAPI) {
        this.id = chapterFromAPI.id;
        this.name = chapterFromAPI.name;
        this.air_date = chapterFromAPI.air_date;
        this.episode = chapterFromAPI.episode;
        this.characters = chapterFromAPI.characters;
    }

    get html() {
        this.createNewTitle;
        this.requestCharacters;
        requestcharacterFromAnEpisode(this)
    }

    get createNewTitle(){
        let newTitle = `${this.name}${"<br></br>"}(${this.air_date}, ${this.episode})`;
        changeTitle(newTitle);
    }
}