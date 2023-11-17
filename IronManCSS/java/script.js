var diamant = document.querySelector(".diamant");

var torsoV = document.querySelector(".torsov");

var mondPlat = document.querySelector(".mondplat");

var oogLinks = document.querySelector(".oogcentrumlinks");

var oogRechts = document.querySelector(".oogcentrumrechts");

var button = document.querySelector("button.activeren");

var aan;

button.addEventListener("click", animaties);


function animaties(){
    if (aan == 1) {
        
        diamant.classList.remove("d-animation");

        torsoV.classList.remove("t-animation");

        mondPlat.classList.remove("m-animation");

        oogLinks.classList.remove("o-animation");

        oogRechts.classList.remove("o-animation");

        button.textContent = "Activeren";

        aan = 0;
    } else {
        console.log("test");

        diamant.classList.add("d-animation");

        torsoV.classList.add("t-animation");

        mondPlat.classList.add("m-animation");

        oogLinks.classList.add("o-animation");

        oogRechts.classList.add("o-animation");

        button.textContent = "Uitzetten";

        aan = 1;
    };
};
