var lastScrollTop = 0;
var navbar = document.querySelector('.navBar');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    document.getElementById('photoHeader').style.top = 200 - (scrollPosition * 1.2) + 'px'; // Augmenter la vitesse de photoHeader
    document.querySelector('.logoBG').style.top = 200 - (scrollPosition * 0.9) + 'px';

    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)'; // déplace la barre de navigation vers le haut
    } else {
        navbar.style.transform = 'translateY(0)'; // déplace la barre de navigation vers le bas
    }
    lastScrollTop = scrollTop; // Mettre à jour lastScrollTop avec la position de défilement actuelle
});

var carousel = document.querySelector('.section3');
console.log(carousel);
carousel.insertAdjacentHTML('afterbegin', '<img class="carousel-image" src="..." alt="...">');

carousel.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

let Id = [];

for (var i = 0; i < 4; i++) {
    carousel.innerHTML += `
    <img id="id${i+1}" src="/assets/PhotosTestMonSite/${i+1}.jpg" alt="${i+1}" class="imgCarousel" width="12%" height="40%">
    `;
    Id[i] = document.getElementById(`id${i+1}`);
    console.log(Id[i]);
}

carousel.innerHTML += '<i class="fa-solid fa-chevron-right"></i>';

for (var i = 0; i < 4; i++) {
  
    Id[i].addEventListener('click', function() {
        Id[i].style.transform = 'scale(1.2)'; // Augmenter la taille de l'image
        console.log("mot");
    });
}





