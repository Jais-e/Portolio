'use strict';

$(document).ready(function(){

    $('.header').hide().fadeIn(500).show();

    $('.footer').hide().fadeIn(500).show();


      // Get "id" of div on mouseover //
    $('.case-thumb').mouseover(function() {
     	currentCase = (this.id);
      console.log(currentCase);
  	 });
     $('#about-me').mouseover(function() {
      	currentCase = (this.id);
       console.log(currentCase);
   	 });
  });
let currentCase ;
let currentIndex = 0;
let me = [
  // About me [0]
  ['<img src="img/about-me-full3.jpg">', '<h1 class="case-title">Om mig</h1>', '<p class="case-description">Hej, jeg studerer Multimedie Design (Frontend) på Erhvervs Akademi Aarhus og leder efter en praktikplads, hvor mine nuværende evner kan tages i brug, samtidig med at der er tid til at lære mig noget nyt. Jeg har gennem årene haft fat i de fleste af Adobe værktøjerne og kan producere både grafik, video og animationer, men har de seneste par år lagt vægt på kodning og frontend. Som udgangspunkt er jeg mest interesseret i et sted, hvor praktikken er med henblik på senere ansættelse.</p>'],
  // About me [1]
  [ '<img src="img/about-me-full3.jpg">', '<h1 class="case-title">Hvem er jeg?</h1>', "<p class='case-description'>Jeg ser mig selv som en problemløser og motiveres af at få ting til at fungere, hvad enten det er funktionelt eller visuelt. En af mine styrker er, en solid logisk forståelse der bevirker, at jeg er god til at se helheden i et projekt og få et hurtigt overblik over problemstillinger og mulige løsninger. Min kreative side tændes af hvad jeg ser og hører på kundebesøg og af kollegers input og idéer.<br>Du kan læse mere om mig og se mit CV på <a href='https://www.linkedin.com/in/jaiseriksen/' target='_blank'>LinkedIn</a> </p>" ]
]
let komedieHuset = [
  //Case 1 [0]
  ['<img src="img/case1-full.jpg">', '<h1 class="case-title">Komediehuset</h1>', '<p class="case-description"><b>Komediehuset</b> er en teaterskole i Horsens. Som en del af en freelance ansættelse på Komediehuset i 2017 lavede jeg et nyt website til dem. De havde i forvejen en side bygget på et 15 år gammelt framework, så der var hårdt brug for en makover. Komediehuset er et meget alsidigt hus med en speciel stil, så det var en god ufordring at lave et design der kunne rumme det.<br/><br><a href="http://www.komediehuset.dk" target="_blank">Besøg siden</a></p>'],
  //Case 1 [1]
  ['<img src="img/case1-full2.jpg">', '<h1 class="case-title">Komediehuset</h1>', '<p class="case-description">Selve designet er lavet, så det matcher husets atmosfære og lidt skæve indretningsstil - Ikke for mange lige linjer .<br/>Krav til funktionalitet: Mulighed for at personalet selv kan opdatere indhold, sende nyhedsbreve, opkobling til diverse SoMe platforme og mobilvenligt - Det åbenlyse valg var en Wordpress løsning. <br><a href="http://www.komediehuset.dk" target="_blank">Besøg siden</a><br><br><em>"Jais er god til at fange vores ønsker om en grafisk profil der støtter sig op af teatrets kunstneriske profil, og som ligger sig i forlængelse af den fortælling vi ønsker formidlet om komediehuset. - <b>Sabrina Koch - Producer</b></em></p>'],

  ['<img src="img/case1-full3.jpg">', '<h1 class="case-title">Komediehuset</h1>', '<p class="case-description">Jeg fik også produceret diverse materiale til tryk, såsom plakater, flyers, postkort og eventprogrammer.<br><br><a href="http://www.komediehuset.dk" target="_blank">Besøg siden</a></p>'],

['<h1 class="case-title">Den Eventyrlige Julerejse</h1>', '<video class="case-video" poster="video/poster-julerejse.jpg" controls preload><source src="video/julerejsen.mp4"></video>', '<p class="case-description">En lille teaser video til det årlige joleshow på Komediehuset. Jeg har filmet og redigeret.</p>']
]
let bigO = [
  //Case 2 [1]
  ['<img src="img/case2-full.jpg">', '<h1 class="case-title">Big O & The Blue Quarters</h1>', '<p class="case-description">Oprindelugt et eksamensprojekt til <em>Grafisk design & brugervenlighed</em> i 2014 (har fået en makeover siden) - enkeltfag til  <em>Akademi uddannelsen i IT - web udvikling</em>. Mit første Wordpress projekt. Er koblet op med Facebook begivenheder og Youtube videoer.</p>']
]
let idesign  = [
  //Case 3 [2]
  ['<img src="img/case3-full.jpg">', '<h1 class="case-title">IDesign4U</h1>', '<p class="case-description">Dette var mit eget lille eventyr som selvstændig freelancer. Er lavet i Wordpress med et noget tilpasset tema. Et relativt simpelt design, med hjemmelavede grafiske elementer, aktuelle tilbud, produkt- og prislister. Plugins: Page builder, AIO SEO, Wordfence security, Child theme, Portfolio Gallery med flere. </p>']
]
let randMyDay = [
  ['<img src="img/case4-full.jpg">', '<h1 class="case-title">Randomize my day</h1>', '<p class="case-description">Et UX projekt på Erhvervs Akademi Aarhus. Opgaven var at finde en ny måde for Hallo hostel at kommunikere med kunderne  på. Jeg fik en ide om en <em>enarmet tyveknægt</em>der kunne generere en tur i byen baseret på tilfældighed udvælgelse af steder indenfor valgte kategorier. Og ligesom på en rigtig enarmet tyveknægt, med mulighed for at beholde ét resultat, og lade de andre rulle igen. Direktøren var meget vild med idéen og sagde at den ville blive implementeret i deres elevator, dog med et andet design - Har ikke undersøgt om det er sket :-)</p>']
]
let alternativet = [
  ['<img src="img/case5-full.jpg">', '<h1 class="case-title">Alternativet Horsens</h1>', '<p class="case-description">Kampagnemateriale til Alternativet Horsens, hvor jeg en kort overgang selv var formand, i forbindelse med KV 2017. En papirløs valgkampagne på Facebook med digitale "flyers", motion graphics og et mindre Wordpress website. Jeg havde det ret sjovt med Adobe After Effects i en <em>learning by doing</em> proces, da det var første gang jeg brugt det program. Resultaterne kan ses på de næste sider.</p>'],
  [
    '<video class="case-video" poster="video/poster-ordleg.jpg" preload controls><source src="video/ordleg.mp4"></video>'
  ],
  [
    '<video class="case-video" preload poster="video/poster-fokus.jpg" controls><source src="video/fokus.mp4"></video>'
  ],
  [
    '<video class="case-video" preload poster="video/poster-jackpot.jpg" controls><source src="video/jackpot.mp4"></video>'
  ],
  [
    '<video class="case-video" preload poster="video/poster-tak.jpg" controls><source src="video/tak_for_valgkamp.mp4"></video>'
  ],
]
let fillTime = [
  ['<img class="case-img" src="img/logoanimation3.gif">']
]
// Back to "frontpage"
document.querySelector('.brand').onclick = function(){
  document.querySelector('.front-page').style.width = "80%";
  document.querySelector('.front-page').style.height = "100%";
  document.querySelector('.front-page').style.marginLeft = "10%";
  document.querySelector('.cases').style.display = "none";
};

// Show cases when clickong on "#cases-btn"
document.querySelector('#cases-btn').onclick = function(){
  document.querySelector('.front-page').style.width = "15%";
  document.querySelector('.front-page').style.height = "auto";
  document.querySelector('.front-page').style.margin = "0";
  let frontHeight = document.querySelector('.front-page').offsetHeight;
  let contentHeieght = document.querySelector('.content').offsetHeight;
  let casesHeight = contentHeieght - frontHeight;
  document.querySelector('.cases').style.height = "casesHeight";
  setTimeout(function(){document.querySelector('.cases').style.display = "flex";}, 400);
  setTimeout(function(){document.querySelector('.cases').style.opacity = "1"}, 410);

};


// Display the chosen case //
$('.case-thumb').click(function() {
  displayCase();
 });

 // Function to determin which case is clicked and load it into a section //
function displayCase(){
  $(".show-case").fadeIn(400).show().css('display','flex');
  // Conditions for which case to show //
if(currentCase == 'case1'){
  $('.case-content').html(komedieHuset[0]);

  };
if (currentCase == 'case2') {
  $('.case-content').html(bigO[0]);

  };
if (currentCase == 'case3') {
  $('.case-content').html(idesign[0]);

  };
if (currentCase == 'case4') {
$('.case-content').html(randMyDay[0]);

  };
if (currentCase == 'case5') {
  $('.case-content').html(alternativet[0]);

  };
if (currentCase == 'case7') {
  $('.case-content').html(caseNumber[0]);

  };
  if (currentCase == 'case6') {
    $('.case-content').html(fillTime[0]);

    };
};
$('#about-me').click(function() {
  displayCase();
  if (currentCase == 'about-me') {
    $('.case-content').html(me[0]);

    };
 });


// show next/previous page in current case //
  $('.next').click(function(){

    if(currentCase == 'case1' && currentIndex+1 < $(komedieHuset).length){
      $('.case-content').animate({left: "-1000"}, 150)
      currentIndex++;
      $('.case-content').animate({left: "0"}, 150)
      .html(komedieHuset[currentIndex]);
      let caseLength = $(komedieHuset).length;
      console.log(caseLength , currentIndex);
      };
      if (currentCase == 'case2') {
        $('.case-content').html(bigO[currentIndex]);
        var caseLength = $(bigO).length;
        };
      if (currentCase == 'case3') {
        $('.case-content').html(idesign[currentIndex]);
        var caseLength = $(idesign).length;
        };
      if (currentCase == 'case4') {
      $('.case-content').html(caseNumber[currentIndex]);
      var caseLength = $(caseName).length;

        };
      if (currentCase == 'case5' && currentIndex+1 < $(alternativet).length) {
        $('.case-content').animate({left: "-1000"}, 150)
        currentIndex++;
        $('.case-content').animate({left: "0"}, 150)
        .html(alternativet[currentIndex]);
        let caseLength = $(alternativet).length;
        };
      if (currentCase == 'case6') {
        $('.case-content').html(caseNumber[currentIndex]);
        var caseLength = $(caseName).length;
        };

      if (currentCase == 'about-me' && currentIndex+1 < $(me).length) {
        $('.case-content').animate({left: "-1000"}, 150)
        currentIndex++;
        $('.case-content').animate({left: "0"}, 150)
        .html(me[currentIndex]);
        let caseLength = $(me).length;
        console.log(caseLength , currentIndex);
        };


        if (currentIndex >= caseLength){
          currentIndex = currentIndex-1;
        }
   });
   $('.prev').click(function(){
      if (currentCase == 'about-me' && currentIndex > 0) {
        currentIndex--;
        $('.case-content').animate({left: "1000"}, 150)
        $('.case-content').animate({left: "0"}, 150).html(me[currentIndex]);
        };


     if(currentCase == 'case1' && currentIndex > 0){
       currentIndex--;
       $('.case-content').animate({left: "1000"}, 150)
       $('.case-content').animate({left: "0"}, 150).html(komedieHuset[currentIndex]);
       };
       if (currentCase == 'case2') {
         $('.case-content').html(bigO[currentIndex]);

         };
       if (currentCase == 'case3') {
         $('.case-content').html(idesign[currentIndex]);

         };
       if (currentCase == 'case4') {
       $('.case-content').html(caseNumber[currentIndex]);

         };
       if (currentCase == 'case5'  && currentIndex > 0) {
         currentIndex--;
         $('.case-content').animate({left: "1000"}, 150)
         $('.case-content').animate({left: "0"}, 150).html(alternativet[currentIndex]);
         };


       if (currentCase == 'case6') {
         $('.case-content').html(caseNumber[currentIndex]);

         };
         if (currentIndex < 0){
           currentIndex = currentIndex+1;
         }
    });
  // Close case window //
  $('.close').click(function() {
    $('.show-case').fadeOut(500);
    $('.case-content').html("");
    currentIndex =0 ;

  });
