
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
    }

    get createNewTitle(){
        let newTitle = `${this.name}(${this.air_date}, ${this.episode})`;
        changeTitle(newTitle);
    }

    get requestCharacters() {
        let requestCharacters = this.characters.map(character => {
            return axios.get(character)
        })
        axios.all(requestCharacters).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
}