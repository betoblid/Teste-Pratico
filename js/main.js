$('#slider').nivoSlider({

    effect: 'random', //O Efeito é aleatório
    slices: 4,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 100,
    pauseTime: 2000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: 'Prev',
    nextText: 'Next',
});

// pegando o elemento via id
const navbar = document.getElementById("navbar-menu-header")
// função que abre o menu e fecha pela classe css
document.getElementById("btn-navbar-menu").addEventListener("click", () => {

    return navbar.classList.contains("hidden") ? navbar.classList.remove("hidden") : navbar.classList.add("hidden")
})