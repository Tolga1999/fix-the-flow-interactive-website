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

// progressie bar
let progressionBar = document.querySelector('.progression-bar');
let progressionBarPercentage = document.querySelector('.progression-bar-percentage');
let progressionBarContent = document.querySelector('.progression-bar-content > p');

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
function locationShowOverlayMenu() {
    gaTerug();
    locationShow();
}

// ruilen pagina
function selectedFile() {
    inruilText.innerHTML = 'Klik nogmaals voor een andere keuze';
    if (kiesPlant.src === 'http://127.0.0.1:5500/assets/cactus.jpg') {
        kiesPlant.src = '../assets/plant3.jpg' //hardcoded omdat ik geen local resources kan inladen
    } else {
        kiesPlant.src = '../assets/cactus.jpg';
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
        kiesPlant2.src = '../assets/plant.jpg';
    } else
        kiesPlant2.src = '../assets/plant4.jpg';
}

// doneer pagina
function selectedDoneerFile() {
    doneerText.innerHTML = 'Klik nogmaals voor een andere keuze';
    if (doneerPlant.src == 'http://127.0.0.1:5500/assets/cactus.jpg')
        doneerPlant.src = '../assets/plant3.jpg'; //hardcoded omdat ik geen local resources kan inladen
    else {
        doneerPlant.src = '../assets/cactus.jpg';
    }
}

// donated page
function tradedpage() {
    window.location.href = "./html/traded.html"; // verander locatie na het completen van de form naar donated.html
}

function donatedpage() {
    window.location.href = "./html/donated.html"; // verander locatie na het completen van de form naar donated.html
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

// gebruik dit stukje code alleen bij index.html
if (document.location.pathname == '/index.html' || document.location.pathname == 'https://tolga1999.github.io/fix-the-flow-interactive-website/') {
    // IMAGE LOOP
    let plantHomepage = document.querySelector('.plant');
    let plantHomepage2 = document.querySelector('.plant2');
    let plantHomepage3 = document.querySelector('.plant3');
    let whichPlant = "plant2";

    // load first image before setInterval function ALLEEN VOOR INDEX.HTML
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
        } else if (whichPlant == "plant1") {
            plantHomepage3.classList.remove('plantOn');
            plantHomepage.classList.add('plantOn');
            whichPlant = "plant2"
        }
    };

    // load in homecontainer options
    let homeContainer = document.querySelector('.homeContainer');
    homeContainer.classList.add('homeContainerOn');
}


// LOCATION MAP
// show location on map
let map = document.querySelector('.location');

function locationShow() {
    map.classList.toggle('locationOn');
}
// close location map
let locationButton = document.querySelector('.close-location');

function closeLocation() {
    map.classList.remove('locationOn');
}

// FORM PAGINA

// FILTEREN IMGAGES
// select images
let filterImagesEasy = document.querySelectorAll('.filter-image-easy');
let filterImagesHard = document.querySelectorAll('.filter-image-hard');

document.querySelector('.easy-filter-button').addEventListener('click', function () {
    filterImagesHard.forEach(hardImage => {
        hardImage.classList.toggle('active');
    });
})

document.querySelector('.hard-filter-button').addEventListener('click', function () {
    filterImagesEasy.forEach(easyImage => {
        easyImage.classList.toggle('active');
    });
})

// klik image
let filterImagesOVerlay = document.querySelectorAll('.filter-image-overlay');
filterImagesOVerlay.forEach(overlay => {
    // easyImage.classList.remove('filter-image-overlay-show')
    overlay.addEventListener('click', function () {
        filterImagesOVerlay.forEach(deleteOverlay => {
            deleteOverlay.classList.remove('filter-image-overlay-show');
        })
        overlay.classList.toggle('filter-image-overlay-show');
        // progressie bar
        progressionBar.classList.add('progression-bar-50');
        progressionBarPercentage.innerHTML = '50%';
        progressionBarContent.innerHTML = 'Progressie 1 / 2';
    })
});

// filter button volgende
document.querySelector('.filter-volgende-button').addEventListener('click', function () {
    let form = document.querySelector('fieldset');
    let filterImages = document.querySelector('.plant-keuze-oba-desktop-alles');

    form.classList.add('fieldset-show');
    filterImages.classList.add('plant-keuze-oba-desktop-alles-hide');

    // scrolled naar boven wanneer je klikt op volgende
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// form progression bar with feedback
let formName = document.querySelector('input[type=text]');
let formPhoneNumber = document.querySelector('input[type=tel]');
let formEmail = document.querySelector('input[type=email');
let formFile = document.querySelector('input[type=file]');

let inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('focusout', validProgress);
    input.addEventListener('focusin', validProgress);
})

function validProgress() {
    if (formName.checkValidity() && formPhoneNumber.checkValidity() && formEmail.checkValidity() && formFile.checkValidity()) {
        progressionBar.classList.add('progression-bar-100');
        progressionBarPercentage.innerHTML = '100%';
        progressionBarContent.innerHTML = 'Progressie 2 / 2';
    } else {
        progressionBar.classList.remove('progression-bar-100');
        progressionBarPercentage.innerHTML = '50%';
        progressionBarContent.innerHTML = 'Progressie 1 / 2';
    }
}