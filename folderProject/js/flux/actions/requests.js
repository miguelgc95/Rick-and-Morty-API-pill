import axios from "axios";

export function chapterRequest () {
    const url = `https://rickandmortyapi.com/api/episode?page=1`;
    axios.get(url)
    .then(response => {
        console.log(response);
    }).catch(e => {
        console.log(e);
    })
}