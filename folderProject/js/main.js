
import { chapterRequest, seasonRequest } from "./flux/actions/requests.js";

let seasonCounter = 1;
seasonRequest(seasonCounter);

document.getElementById("check").addEventListener("input", strech);

function strech() {
    document.querySelector("main section").classList.toggle("main-strech")
}