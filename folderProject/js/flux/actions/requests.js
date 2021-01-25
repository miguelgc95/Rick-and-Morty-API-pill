
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
        seasonCounter++;
        seasonRequest(seasonCounter)
        return response;
    }).catch(error => {
        console.log("zacaborbalon", error);
    })
}