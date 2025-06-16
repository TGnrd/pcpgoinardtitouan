//--------------- Chapitre 2 - Popup ------------------

window.onload = function() {
    // Nombre de popups à générer
    var numberOfPopups = 15;

    // Génére les popups
    generatePopups(numberOfPopups);
}

function generatePopups(number) {
    var margin = 50; // Marge réduite de 50px
    var popupWidth = 180; // Largeur des popups
    var popupHeight = 180; // Hauteur des popups

    for (var i = 0; i < number; i++) {
        var popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.textContent = 'Popup ' + (i + 1);

        // Création de la croix
        var cross = document.createElement('div');
        cross.className = 'cross';
        cross.textContent = 'X';
        cross.addEventListener('click', closePopup.bind(null, popup, i + 1)); // Ajout d'un gestionnaire d'événement au clic
        popup.appendChild(cross);

        // Positionne aléatoirement sur la page avec une marge réduite
        var randomX = Math.floor(Math.random() * (window.innerWidth - 2 * margin - popupWidth)) + margin;
        var randomY = Math.floor(Math.random() * (window.innerHeight - 2 * margin - popupHeight)) + margin;

        popup.style.left = randomX + 'px';
        popup.style.top = randomY + 'px';

        document.body.appendChild(popup);
    }
}

function closePopup(popup, popupNumber) {
    // Pour les popups suivants = disparaissent de l'écran
    if (popupNumber === 2 || popupNumber === 5 || popupNumber === 6 || popupNumber === 7 || popupNumber === 10 || popupNumber === 12 || popupNumber === 13 || popupNumber === 15) {
        popup.style.display = 'none';
    } // Les autres popups rafraîchit la page
        else if (popupNumber === 1 || popupNumber === 3 || popupNumber === 4 || popupNumber === 8 || popupNumber === 11 || popupNumber === 14) {
        location.reload();
    } // Le popup 9 redirige vers une autre page HTML
        else if (popupNumber === 9) {
        window.location.href = 'quiz.html';
    }
}

