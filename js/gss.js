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


// boolean

let isTrue = true;
let isFalse = false;


// chiffres et opérateurs 

let chiffre1 = 4;
let chiffre2 = 3;

// calcul


// conditions - if et les switch

if (chiffre1 < chiffre2) {
   
}
if (chiffre1 < 2) {
    
} else {
   
}

// tableaux

let tableau = ['item 1', 'item 2', 'item 3', 'item 4'];


// objets 

let obj = {
    title: 'mon titre',
    description: 'ma description'
}


// les boucles - while, for, foreach, switch

for (let i = 0; i < tableau.length; i++) {
    const elem = tableau[i];
    
}
tableau.forEach(elem => {
   
})


// fonctions 

/* function myFunction() {
  console.log('ma fonction');
} */

const myFunction = (param, param2) => {
    
    let result = param + param2;
    return result;
}
myFunction(6, 3);
const resultat = myFunction(6, 3);



// interagir avec le dom // methode, proprietes, evement


// selectors !
let header = document.querySelector('header');


let grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
    
})

header.classList.add('is-black');



// insertion dom 

// événements les plus courants

document.addEventListener("DOMContentLoaded", () => {
    
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
