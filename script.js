document.querySelectorAll(".box").forEach((box) => {
    const percentage = parseInt(box.querySelector("span").textContent, 10);
    const circle = box.querySelector("svg circle:nth-child(2)");
    const circumference = 2 * Math.PI * 50; 
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (circumference * percentage) / 100;
});

function afficherArticle() {
    var article = document.getElementById('deuxiemeStage');
    var bouton = document.getElementById('boutonDescent2');
    if (article.style.display === 'none') {
        article.style.display = 'block';
        bouton.style.marginTop = '33%';
        bouton.textContent = '▲';
    } else {
        article.style.display = 'none';
        bouton.style.marginTop = '17.5%';
        bouton.textContent = '▼';
    }  
};

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('main-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const opened = btn.classList.toggle('opened'); // conserve visuel existant
    nav.classList.toggle('open', opened);

    // ARIA pour accessibilité
    btn.setAttribute('aria-expanded', String(opened));
    nav.setAttribute('aria-hidden', String(!opened));
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du bouton versPresentation
    const btnVersPresentation = document.getElementById('versPresentation');
    const sectionPresentation = document.getElementById('presentation');

    if (btnVersPresentation && sectionPresentation) {
        btnVersPresentation.addEventListener('click', function() {
            sectionPresentation.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Gestion du défilement smooth pour tous les liens de la navbar
    const navLinks = document.querySelectorAll('.content a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Si c'est un lien interne (#id), on fait le scroll smooth
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Ferme le menu après le clic
                    const nav = document.getElementById('main-nav');
                    const menuBtn = document.getElementById('menuBtn');
                    if (nav && menuBtn) {
                        nav.classList.remove('open');
                        menuBtn.classList.remove('opened');
                        menuBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            }
            // sinon (ex: index.html) laisser le comportement par défaut pour permettre la navigation
        });
    });
});

