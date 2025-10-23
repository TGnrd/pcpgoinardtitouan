document.querySelectorAll(".box").forEach((box) => {
    const percentage = parseInt(box.querySelector("span").textContent, 10);
    const circle = box.querySelector("svg circle:nth-child(2)");
    const circumference = 2 * Math.PI * 50; 
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (circumference * percentage) / 100;
});

function afficherArticle() {
    var article = document.getElementById('premierStage');
    var bouton = document.getElementById('boutonDescent');

    if (article.style.display === 'none' || article.style.display === '') {
        article.style.display = 'block';
        bouton.style.marginTop = '33%';
        bouton.textContent = '▲';
    } else {
        article.style.display = 'none';
        bouton.style.marginTop = '17.5%';
        bouton.textContent = '▼';
    }  
};

function afficherDetails() {

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