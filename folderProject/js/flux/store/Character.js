import { renderCharacterBasics } from "../view/render.js";

export class Character {
    constructor (characterAPI) {
        this. created= characterAPI.created;
        this.episode = characterAPI.episode;
        this.gender = characterAPI.gender;
        this.id = characterAPI.id;
        this.image = characterAPI.image;
        this.location = characterAPI.location;
        this.name = characterAPI.name;
        this.origin = characterAPI.origin;
        this.spacies = characterAPI.spacies;
        this.status = characterAPI.status;
    }

    get htmlForChapter() {
        var $chapterWrapper = document.createElement('div');
        $chapterWrapper.classList.add("character", "flex-column");
        var $img = document.createElement('img');
        $img.setAttribute("src", this.image);
        $img.setAttribute("alt", "image");
        $img.classList.add("character-img");
        var $divInfo = document.createElement('div');
        $divInfo.classList.add("basic-character-info-wrapper");
        var $name = document.createElement('span');
        var $status = document.createElement('span');
        var $specie = document.createElement('span');
        $divInfo.appendChild($name, $status, $specie);
        $chapterWrapper.appendChild($img, $divInfo);
        renderCharacterBasics($chapterWrapper);
    }
}