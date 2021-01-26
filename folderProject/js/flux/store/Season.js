
import { showSeasonChapters, showSpecificChapter } from '../view/render.js'

export class Season {
    constructor (seasonId, season) {
        this.seasonId = seasonId;
        this.chapters = season.results
    }

    get html () {
        var $myDiv = document.createElement('div');
        $myDiv.classList.add("season", "flex-column");
        var $seasonH2 = document.createElement('h2');
        $seasonH2.classList.add("bold-and-pointer")
        $seasonH2.innerHTML = `Season ${this.seasonId}`;
        $seasonH2.addEventListener("click", showSeasonChapters);
        $myDiv.appendChild($seasonH2);
        $myDiv.appendChild(this.renderChapters);
        return $myDiv
    }

    get renderChapters(){
        let $divWithChapters = document.createElement('div');
        $divWithChapters.classList.add("chapters", "flex-column", "hidden")
        this.chapters.forEach(chapter => {
            var $chapter = document.createElement('span');
            $chapter.classList.add("boldito-and-pointer")
            $chapter.setAttribute("url", chapter.url)
            $chapter.innerHTML = chapter.name;
            $chapter.addEventListener("click", showSpecificChapter);
            $divWithChapters.appendChild($chapter);
        });
        return $divWithChapters
    }
}
