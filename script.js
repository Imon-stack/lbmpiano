// console.log("hlw world");


const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeslider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [];;
audio = new Audio("tunes/a.wav");

const playtune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
    // console.log(allkeys);

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.add("active");

    }, 150);

}


pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playtune(key.dataset.key));
});

const handlevolume = (e) => {
    audio.volume = e.target.value;

}

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) => {
    if (allkeys.includes(e.key)) playtune(e.key);
}


keysCheckbox.addEventListener("click", showHideKeys);
volumeslider.addEventListener("input", handlevolume);
document.addEventListener("keydown", pressedkey);