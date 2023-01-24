> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Fix the flow interactive website - Buurtcampus

## User Story
<!-- Schrijf de user story waar je aan hebt gewerkt  -->
"Als buurtbewoner van Amsterdam Oost wil ik kunnen filteren in de stekjes, om de moeilijkheidsgraad van het verzorgen van een plant te kunnen zien".

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De flow van mijn website ziet er als volgt uit: Homepagina -> ruilen of doneren -> ruil/doneer formulier pagina -> ruil/doneer gegevens.

De focus van deze sprint is het filteren van de stekjes, wat te maken heeft met de ruil pagina.

Je kan op de ruil pagina filteren tussen makkelijke en moeilijke plantjes, een klik op een plantje vult de progressiebar met 50% (user feedback). Na het kiezen van een plant kan je naar het formulier waarin je je gegevens kan invullen. Tot slot krijg je in de "ruil gegevens pagina" een generated code die je kan inruilen voor het plantje dat je hebt gereserveerd.

<!-- Voeg een mooie poster visual toe 📸 -->
_Wirelow ontwerp:_

<img src="https://user-images.githubusercontent.com/112855878/207050840-de7e26d9-95d7-4207-9b1f-c00fc10178ec.jpg" width="50%">

_Online pagina:_

<img src="https://user-images.githubusercontent.com/112855878/214354325-0772006c-7754-411f-a490-68f6cfced2e5.png" width="50%">

<!-- Voeg een link toe naar Github Pages 🌐-->
_Github pages:_

https://tolga1999.github.io/fix-the-flow-interactive-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
Dit project is gebouwd met HTML, CSS en JS. 

HTML structuur:

``` HTML
<body>
    <main>
        <!-- progriessie bar -->
        <section class="content-form">
            <h1 class="titel-form-desktop">Ruilen</h1>
            <div class="progression-bar-content-all">
                <h1 class="titel-form">Ruilen</h1>
                <div class="progression-bar-content">
                    <p>Progressie 0 / 2</p>
                    <div class="progression-bar-all">
                        <span class="progression-bar"></span>
                    </div>
                    <div class="progression-bar-percentage">
                        <p>0%</p>
                    </div>
                </div>
            </div>
            <!-- filter keuzes -->
            <div class="plant-keuze-oba-desktop-alles">
                <section class="plant-keuze-oba-desktop">
                    <div class="desktop-filter-buttons">
                        <p>Kies hier de moeilijkheidsgraad van uw plantje</p>
                        <button class="easy-filter-button">Makkelijk</button>
                        <button class="hard-filter-button">Moeilijk</button>
                    </div>
                  
                    <!-- keuze plantjes -->
                    <div class="desktop-images">
                        <div class="filter-image-overlay-all filter-image-easy">
                            <div class="filter-image-overlay"></div>
                            <img class="image333" src="../assets/cactus.jpg" alt="cactus desktop">
                            <div class="subtext-overlay">
                                <p>Makkelijk</p>
                            </div>
                        </div>
                      
                        <div class="filter-image-overlay-all filter-image-hard">
                            <div class="filter-image-overlay"></div>
                            <img src="../assets/plant.jpg" alt="cactus desktop">
                            <div class="subtext-overlay">
                                <p>Moeilijk</p>
                            </div>
                        </div>
                    </div>
                  
                    <!-- knop naar het formulier (next step) -->
                    <button class="submit filter-volgende-button"> Volgende</button>
                </section>
            </div>
            
            <!-- het formulier -->
            <fieldset class="trade-form-fieldset">
                <form onsubmit="tradedpage();return false">
                 <!-- inhoud formulier -->
                </form>
             </fieldset>
          
        </section>
    </main>
</body>
```


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
