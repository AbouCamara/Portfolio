console.log('boutech');
// https://developer.mozilla.org/fr/docs/Web/JavaScript
/* 
 Boutech Pro By G2S (Globale Soft Services) First projet by Xarala Academy Azur : Mentor Ousseynou DIOP Team xarala.
  https://developer.mozilla.org/fr/docs/Web/HTML
*/

// string
let myVar = "let";
// const myVar = "const";

myVar = "new";

console.log(myVar);

// template string, Littéraux de gabarits et concat

let test = 'text ' + myVar;
let test2 = `text ${myVar}`;
console.log(test);
console.log(test2);

// boolean

let isTrue = true;
let isFalse = false;

console.log(isFalse)

// chiffres et opérateurs 

let chiffre1 = 4;
let chiffre2 = 3;

// calcul
console.log(chiffre1 + chiffre2)
console.log(chiffre1 - chiffre2)
console.log(chiffre1 / chiffre2)
console.log(chiffre1 * chiffre2)

// conditions - if et les switch

if (chiffre1 < chiffre2) {
    console.log('condition est valide');
}
if (chiffre1 < 2) {
    console.log('...');
} else {
    console.log('condition non valide');
}

// tableaux

let tableau = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(tableau);
console.log(tableau[0]);

// objets 

let obj = {
    title: 'mon titre',
    description: 'ma description'
}
console.log(obj.title, obj.description);

// les boucles - while, for, foreach, switch

for (let i = 0; i < tableau.length; i++) {
    const elem = tableau[i];
    console.log('array ' + elem)
}
tableau.forEach(elem => {
    console.log('obj ' + elem);
})


// fonctions 

/* function myFunction() {
  console.log('ma fonction');
} */

const myFunction = (param, param2) => {
    console.log(param, param2);
    let result = param + param2;
    return result;
}
myFunction(6, 3);
const resultat = myFunction(6, 3);
console.log(resultat);


// interagir avec le dom // methode, proprietes, evement
console.log(window);
console.log(document);

// selectors !
let header = document.querySelector('header');
console.log(header);

let grids = document.querySelectorAll('.grid');
console.log(grids.length);
grids.forEach((grid) => {
    console.log(grid);
})

header.classList.add('is-black');

console.log(header.classList);

// insertion dom 

// événements les plus courants

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
});
/*
header.addEventListener("mouseenter", () => {
  console.log("on survol le header");
});
header.addEventListener("mouseleave", () => {
  console.log("on quitte le header");
});
header.addEventListener("click", () => {
  console.log("on click sur le header");
});
*/

// functions du thème

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    links.forEach(link => {
        link.addEventListener('click', function () {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();

/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        });
    }
    const showProjets = (elem) => {

        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if (elem === "all") {
                projet.parentNode.classList.remove('hide');
                return
            }

            /*if (filter !== elem) {
              projet.parentNode.classList.add('hide');
             
            } else {
              projet.parentNode.classList.remove('hide');
              
            }*/

            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter)
            resetActiveLinks();
            elem.classList.add('active');
        });
    });

}

tabsFilters();

function showProjectDetails() {

    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btnsClose = document.querySelectorAll('.modal__close');

    function hideModals() {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(`[id="${elem.dataset.id}"]`).classList.add('show');
        });
    });

    btnsClose.forEach(btn => {
        btn.addEventListener('click', function () {
            hideModals();
        });
    });

}

showProjectDetails();

/* Effects */

const observerIntersectionAnimation = function () {

    let sections = document.querySelectorAll("section");
    let skills = document.querySelectorAll(".skills .bar");

    const init = () => {

        sections.forEach((elem, index) => {
            console.log(index);
            if (index === 0) {
                return
            }

            elem.style.opacity = "0";
            elem.style.transition = "all 1s ease-out";
        });
        skills.forEach(elem => {
            elem.style.width = "0";
            elem.style.transition = "all 1.6s";
        });
    }

    init();

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let section = entry.target;
                section.style.opacity = "1";
                sectionObserver.unobserve(section);
            }
        });
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let bar = entry.target;
                bar.style.width = bar.dataset.width + '%';
            }
        });
    });

    skills.forEach(function (section) {
        skillsObserver.observe(section);
    });
}

observerIntersectionAnimation();