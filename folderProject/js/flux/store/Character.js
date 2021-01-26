import { renderCharacterBasics, renderTheCharacter } from "../view/render.js";
import { changeTitle } from "../view/render.js";

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
        this.specie = characterAPI.species;
        this.status = characterAPI.status;
    }

    get changeTitle() {
        let newTitle = this.name
        changeTitle(newTitle);
    }

    get htmlForCharacter() {

        var $characterWrapper = document.createElement('div');
        var $img = document.createElement('img');
        var $divInfo = document.createElement('div');
        var $status = document.createElement('span');
        var $specie = document.createElement('span');
        var $gender = document.createElement('span');
        var $origin = document.createElement('span');
        $img.setAttribute("src", this.image);
        $img.setAttribute("alt", "image");
        $img.classList.add("character-image");
        $divInfo.classList.add("complete-character-info-wrapper");
        $status.innerHTML = `Status: ${this.status}`;
        $specie.innerHTML = `Specie: ${this.specie}`;
        $gender.innerHTML = `Gender: ${this.gender}`,
        $origin.innerHTML = `Origin: ${this.origin.name}`;
        $divInfo.appendChild($status);
        $divInfo.appendChild($specie);
        $divInfo.appendChild($gender);
        $divInfo.appendChild($origin);
        $divInfo.classList.add("flex-column");
        $characterWrapper.appendChild($img)
        $characterWrapper.appendChild($divInfo);
        $characterWrapper.classList.add("character-wrapper");
        console.log($characterWrapper);
        return $characterWrapper
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
        $name.innerHTML=this.name;
        var $status = document.createElement('span');
        $status.innerHTML = this.status;
        var $specie = document.createElement('span');
        $specie.innerHTML = this.specie;
        var $separator = document.createElement('span');
        $separator.innerHTML = ` / `;
        $divInfo.appendChild($status);
        $divInfo.appendChild($separator);
        $divInfo.appendChild($specie);
        $chapterWrapper.appendChild($name)
        $chapterWrapper.appendChild($img)
        $chapterWrapper.appendChild($divInfo);
        $chapterWrapper.addEventListener("click", ()=> {
            renderTheCharacter(this)
        });
        renderCharacterBasics($chapterWrapper);
    }
}