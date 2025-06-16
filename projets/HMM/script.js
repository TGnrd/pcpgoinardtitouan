// ------------------ Page index ------------------


// Apparaît quand le bouton oui est cliqué
function showAlert0() {
    alert("Je suis pas d'accord.");
}

//Affiche le popup du bouton "quitter le site"
function togglePopup(){
    let popup = document.querySelector("#popup_overlay");
    popup.classList.toggle("open");
}


// ------------------ Page 2 ------------------



var i = 0;
var intervalId = setInterval(() => {
    document.querySelector("#chargement").value = i;
    i++;
    if (i > 50) {
        // Une fois que le chargement renvoie à la page 3
        clearInterval(intervalId); // Stop l'intervalle de chargement
        window.location.href = "page_3.html"; // Redirige vers une nouvelle page HTML
    }
}, 500);



// ------------------ Page 3 ------------------


// Joue le son
function playSound() {
    var audio = document.getElementById("audio");
    audio.play(); // Jouer le son lorsque le lien est cliqué
}

function togglePopup2(){
    let popup = document.querySelector("#popup_overlay2");
    popup.classList.toggle("open");
}

// Page Game_over : Depuis la page_3, si on fait "Jouer ?" -> "oui" alors on arrive sur la page game_over avec une alerte
// check si "oui" a été cliqué sur la page_3
function setPopupUsed() {
    sessionStorage.setItem("popupUsed", "true");
}
window.onload = function() {
    checkPopupUsed();
};

// affiche l'alerte
function checkPopupUsed() {
    var popupUsed = sessionStorage.getItem("popupUsed");
    if (popupUsed === "true") {
        alert("Bas pourquoi tu joues pas alors ?");
        sessionStorage.removeItem("popupUsed");
    }
};


function showAlert1() {
    alert("Bas pourquoi tu joues pas alors ?");
}

function showAlert2(){
    alert("Pourquoi t'es ici alors ?");
}

function showAlert3(){
    alert("T'es sur la bonne voie... Clique ensuite sur le 6ème bouton, puis le 8ème");
}

function showAlert4(){
    alert("Bon toutou !");
}


// Variables pour garder une trace des boutons cliqués
var bouton2Clicked = false;
var bouton3Clicked = false; 
var bouton6Clicked = false;
var bouton8Clicked = false;

// Fonction à exécuter lorsqu'un bouton est cliqué
function boutonClique(event) {
    // Récupération de l'index du bouton cliqué
    var index = parseInt(event.target.getAttribute('data-index'));
    
    // Vérification de l'index du bouton cliqué
    if (index === 2 && !bouton2Clicked) {
      showAlert3();
      bouton2Clicked = true;
    } else if (index === 6 && bouton2Clicked && !bouton6Clicked) {
      bouton6Clicked = true;
    } else if (index === 8 && bouton2Clicked && bouton6Clicked && !bouton8Clicked) {
      showAlert4();
      bouton8Clicked = true;
    } else if (index === 3 && bouton2Clicked && !bouton3Clicked && bouton6Clicked && bouton8Clicked) {
      showWhiteWindow(); // Appel de showWhiteWindow() lorsque le bouton 3 est cliqué
      bouton3Clicked = true;
    }
  }


// Sélectionne tous les liens de la page
var liens = document.querySelectorAll('.option_boutons'); // liens = <a></a>


// Ajout d'un écouteur d'événement à chaque lien
liens.forEach(function(lien, index) {
  lien.addEventListener('click', boutonClique);
  lien.setAttribute('data-index', index + 1);
});


// Fonction pour afficher le menu option
function toggleSettingsPopup() {
    var settingsOverlay = document.getElementById("settings_overlay");
    settingsOverlay.classList.toggle("show");
}


// Fonction pour fermer le menu option
function closeSettingsPopup() {
    var settingsOverlay = document.getElementById("settings_overlay");
    settingsOverlay.classList.remove("show");
}


// affichage des options
function showWhiteWindow() {
    var whiteWindow = document.getElementById("white_window");
    whiteWindow.style.display = "block";
}


function hideWhiteWindow() {
    var whiteWindow = document.getElementById("white_window");
    whiteWindow.style.display = "none";
    bouton3Clicked = false; // bouton3Clicked redevient false
}

window.onload = function() {
    var chapitre1 = document.querySelector('.chapitre1');
    chapitre1.classList.add('finished');
}


// ------------ Fin1 ---------------------


let bouton2 = document.querySelector('.bouton_2');
let clickCount = 0;
bouton2.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    clickCount++;
    if (clickCount === 1) {
        alert("T'es sérieux de vouloir cliquer sur un aussi gros bouton t'as rien appris de ton expérience ? (1/3)");
    } else if (clickCount === 2) {
        alert("C'est la dernière fois que je te sauve la vie, re clique dessus si ça te chantes... hmmfff ! (2/3)");
    } else if (clickCount === 3) {
        window.location.href = bouton2.getAttribute('href');
    }
});


// ------------ Chapitre ---------------------


function showAlert5() {
    alert("Ne t'inquiète pas tu n'as pas besoin de recommencer cette torture ;)");
}


// ------------ Quiz ---------------------


function checkAnswer(questionNumber, selectedAnswer) {
    var correctAnswer;
    switch (questionNumber) {
        case 1:
            correctAnswer = '75';
            break;
        case 2:
            correctAnswer = 'O(n)';
            break;
        case 3:
            correctAnswer = 'dieux';
            break;
        default:
            break;
    }

    if (selectedAnswer === correctAnswer) {
        document.getElementById('question' + questionNumber).classList.add('hidden');
        if (questionNumber < 3) {
            document.getElementById('question' + (questionNumber + 1)).classList.remove('hidden');
        } else {
            alert("J'y crois pas, tu es intelligent !? "); // Message de félicitations à la fin du quiz
            window.location.href = "fin2.html"; // Redirige vers chapitre.html
        }
    } else {
        alert('Nul, nul nuuullll.'); // Message d'erreur pour une mauvaise réponse
        resetQuiz(); // Reset le quiz en cas de mauvaise réponse
    }
}

function resetQuiz() {
    // Remet le quiz à zéro pour afficher la première question et réactive tous les boutons
    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        question.classList.add('hidden');
    });
    document.getElementById('question1').classList.remove('hidden');

    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.disabled = false;
        button.style.backgroundColor = ''; // Réinitialise la couleur de fond
    });
}


// ------------ Fin2 ---------------------


function showAlert6() {
    alert("T'as de la chance la page ne contient aucun piège. (1/4)");
    alert("Bon t'es prêt à voir ton score ? (2/4)");
    alert("T'as été plutôt bon, pour de vrai ! (3/4)");
    alert("En fait y a pas de score. Bonne journée ! (4/4)");
}
