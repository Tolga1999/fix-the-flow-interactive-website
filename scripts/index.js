let overlay = document.querySelector('.overlay');
let overlayPlant = document.querySelector('.overlayPlant');
let menuButton = document.getElementById('menuButton');
let body = document.querySelector('body');
// selecteren van files
let kiesPlant = document.querySelector('.kiesPlant');
let inruilText = document.querySelector('.inruilText');
// plant kiezen van oba
let plantInput = document.querySelectorAll(".plantInruilen");

// doneer pagina
let doneerText = document.querySelector('.doneerText');
let doneerPlant = document.querySelector('.doneerPlant');

// reviews
const star1 = document.querySelector('.starIcon1');
const star2 = document.querySelector('.starIcon2');
const star3 = document.querySelector('.starIcon3');
const star4 = document.querySelector('.starIcon4');
const star5 = document.querySelector('.starIcon5');

// overlay menu
function menuOpen() {
    overlay.classList.add('overlayOn');
    menuButton.style.visibility = 'hidden';
    menuButton.style.opacity = '0';
    body.style.overflow = 'hidden';
}

function gaTerug() {
    overlay.classList.remove('overlayOn');
    menuButton.style.visibility = 'visible';
    menuButton.style.opacity = '1';
    body.style = '';
}

// laat locatie zien in de overlay menu
function locationShowOverlayMenu(){
    gaTerug();
    locationShow();
}

// ruilen pagina
function selectedFile() {
    inruilText.innerHTML = 'Klik nogmaals voor een andere keuze';
    if (kiesPlant.src === 'http://127.0.0.1:5500/assets/cactus.jpg')
        kiesPlant.src = '/assets/plant3.jpg' //hardcoded omdat ik geen local resources kan inladen
    else {
        kiesPlant.src = '/assets/cactus.jpg';
    }
}

function kiezenPlantje() {
    overlayPlant.classList.add('overlayOn');
    body.style.overflow = 'hidden';

    // foreach wordt gebruikt voor elke element binnen de array
    plantInput.forEach(element => {
        element.style.opacity = "0";
    })
}

function gekozenPlantje() {
    overlayPlant.classList.remove('overlayOn');
    plantInput.forEach(element => {
        element.style.opacity = "1";
    })
    body.style.overflow = 'scroll';
    let kiesPlant2 = document.querySelector('.kiesPlant2');
    if (kiesPlant2.src == 'http://127.0.0.1:5500/assets/plant4.jpg') {
        kiesPlant2.src = '/assets/plant.jpg';
    } else
        kiesPlant2.src = '/assets/plant4.jpg';
}

// doneer pagina
function selectedDoneerFile() {
    doneerText.innerHTML = 'Klik nogmaals voor een andere keuze';
    if (doneerPlant.src == 'http://127.0.0.1:5500/assets/cactus.jpg')
        doneerPlant.src = '/assets/plant3.jpg'; //hardcoded omdat ik geen local resources kan inladen
    else {
        doneerPlant.src = '/assets/cactus.jpg';
    }
}

// donated page
function tradedpage() {
    window.location.href = "/html/traded.html"; // verander locatie na het completen van de form naar donated.html
}

function donatedpage() {
    window.location.href = "/html/donated.html"; // verander locatie na het completen van de form naar donated.html
}

function fillStars(star) {
    switch (star) {
        case 1:
            star1.style.opacity = '1';
            break;
        case 2:
            star1.style.opacity = '1';
            star2.style.opacity = '1';
            break;
        case 3:
            star1.style.opacity = '1';
            star2.style.opacity = '1';
            star3.style.opacity = '1';
            break;
        case 4:
            star1.style.opacity = '1';
            star2.style.opacity = '1';
            star3.style.opacity = '1';
            star4.style.opacity = '1';
            break;
        case 5:
            star1.style.opacity = '1';
            star2.style.opacity = '1';
            star3.style.opacity = '1';
            star4.style.opacity = '1';
            star5.style.opacity = '1';
            break;
    }
}

function normallStars() {
    star1.style.opacity = '0.5';
    star2.style.opacity = '0.5';
    star3.style.opacity = '0.5';
    star4.style.opacity = '0.5';
    star5.style.opacity = '0.5';
}

function veranderContrast() {
    let headings = document.querySelectorAll('h1, h2');
    let pijlers = document.querySelectorAll('.pijlers');
    let buttons = document.querySelectorAll('.ruilenDoneren');

    // background van body
    document.body.style.background = "#000000";

    // uitleg text
    let uitleg = document.querySelector('.ruilenDonerenText');
    uitleg.style.background = "#000000";
    uitleg.style.color = "#AAC789";
    uitleg.style.border = "2px solid #AAC789";

    // menu button
    let menu = document.querySelector('#menuButton');
    menu.style.background = "#AAC789";
    menu.style.color = "#000000";

    // overlay background
    let overlayBackground = document.querySelector('.overlay');
    overlayBackground.style.background = "#000000E5";

    // contrast button
    let contrastImage = document.querySelector('.contrastImage');
    contrastImage.src = "/assets/contrast1.png";

    // hoe werkt het border top
    let borderTop = document.querySelector('.hoeWerktHet');
    borderTop.classList.add("hoeWerktHetContrast"); // dit is een class die toegevoegd wordt aan de class hoeWerktHet, de class bestaat al in css

    for (let i = 0; i < headings.length; i++) {
        // headings
        headings[i].style.color = "#AAC789";
    }

    for (let i = 0; i < pijlers.length; i++) {
        // pijlers
        pijlers[i].style.background = "#000000";
        pijlers[i].style.border = "2px solid #AAC789";
        pijlers[i].style.color = "#AAC789";
    }

    for (let i = 0; i < buttons.length; i++) {
        // buttons
        buttons[i].style.background = "#AAC789";
        buttons[i].style.color = "#000000";

    }
}

// IMAGE LOOP
let plantHomepage = document.querySelector('.plant');
let plantHomepage2 = document.querySelector('.plant2');
let plantHomepage3 = document.querySelector('.plant3');
let whichPlant = "plant2";

// load first image before setInterval function
plantHomepage.classList.add('plantOn');

// setInterval used to call the funtion every 2 seconds or 2000 milliseconds
const interval = setInterval(timerCall, 2000);

function timerCall() {
    if (whichPlant == "plant2") {
        plantHomepage.classList.remove('plantOn');
        plantHomepage2.classList.add('plantOn');
        whichPlant = "plant3";
    } else if (whichPlant == "plant3") {
        plantHomepage2.classList.remove('plantOn');
        plantHomepage3.classList.add('plantOn');
        whichPlant = "plant1";
    } else if(whichPlant == "plant1"){
        plantHomepage3.classList.remove('plantOn');
        plantHomepage.classList.add('plantOn');
        whichPlant = "plant2"
    }
  };

// load in homecontainer options
  let homeContainer = document.querySelector('.homeContainer');
  homeContainer.classList.add('homeContainerOn');

// LOCATION MAP
// show location on map
let map = document.querySelector('.location');
  function locationShow(){
    map.classList.toggle('locationOn');
  }
// close location map
let locationButton = document.querySelector('.close-location');
function closeLocation(){
    map.classList.remove('locationOn');
}


