function ajouterZero(chiffre) {
    return (chiffre < 10) ? "0" + chiffre : chiffre;
}

function mettreAJourHeure() {
    var maintenant = new Date();

    var heures = maintenant.getHours();
    var minutes = maintenant.getMinutes();
    var secondes = maintenant.getSeconds();

    mettreAJourClasses("heure_dizaine", Math.floor(heures / 10));
    mettreAJourClasses("heure_unite", heures % 10);

    mettreAJourClasses("minute_dizaine", Math.floor(minutes / 10));
    mettreAJourClasses("minute_unite", minutes % 10);

    mettreAJourClasses("seconde_dizaine", Math.floor(secondes / 10));
    mettreAJourClasses("seconde_unite", secondes % 10);
}

var valeurTranslationHeures = {
    0: 115,
    1: 40,
    2: -40
};

var valeurTranslationDizaines = {
    0: 225,
    1: 150,
    2: 75,
    3: 0,
    4: -75,
    5: -150
};

var valeurTranslationUnite = {
    0: 375,
    1: 300,
    2: 225,
    3: 150,
    4: 75,
    5: 0,
    6: -75,
    7: -150,
    8: -225,
    9: -300
};

function mettreAJourClasses(classeParent, valeur) {
    var parent = document.querySelector("." + classeParent);
    var spans = parent.querySelectorAll("span");

    spans.forEach(function(span) {
        span.classList.remove("active");
    });

    spans[valeur].classList.add("active");

    if (classeParent.includes("heure_dizaine")) {
        var valeurTranslation = valeurTranslationHeures[valeur];
        parent.style.transform = "translateY(" + valeurTranslation + "px)";
    } else if (classeParent.includes("unite")) {
        var pourcentageTranslation = valeurTranslationUnite[valeur];
        parent.style.transform = "translateY(" + pourcentageTranslation + "px)";
    } else if (classeParent.includes("dizaine")) {
        var valeurTranslation = valeurTranslationDizaines[valeur];
        parent.style.transform = "translateY(" + valeurTranslation + "px)";
    }
}

setInterval(mettreAJourHeure, 1000);

mettreAJourHeure();
