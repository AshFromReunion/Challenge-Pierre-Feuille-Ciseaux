var scoreU = 0;
var scoreO = 0;

$(document).ready(function () {
    $('#commencer').click(commencer);
    $('img').click(jouer);
});

function commencer() {

    $("#commencer").fadeOut();

    var seconde = 4;

    var decompte = setInterval(function () {
        seconde--;

        $('#cmpteRebour').html(seconde);
    }, 1000);

    setTimeout(function () {
        clearInterval(decompte);
        $("img, p, h2").removeClass("cacher");
        $('#cmpteRebour').html('');
    }, 4000);

}

function jouer(evt) {
    $('#cmpteRebout').html(' ');
    var objClicked = evt.currentTarget;
    var choixUtilisateur = objClicked.id;

    var choixOrdi = Math.random();
    if (choixOrdi < 0.34) {
        choixOrdi = "pierre";
    } else if (choixOrdi <= 0.67) {
        choixOrdi = "feuille";
    } else {
        choixOrdi = "ciseaux";
    }

    console.log(comparer(choixUtilisateur, choixOrdi));

}

function comparer(choixUtilisateur, choixOrdi) {
    if (choixUtilisateur === choixOrdi) {
        return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Egalite !!!!!!");
    } else if (choixUtilisateur === "pierre") {
        if (choixOrdi === "ciseaux") {
            scoreU++;
            $('#scoreUtilisateur').text(scoreU);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez gagner ! :D");
        } else {
            scoreO++;
            $('#scoreOrdinateur').text(scoreO);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez perdu :( ");
        }
    } else if (choixUtilisateur === "feuille") {
        if (choixOrdi === "pierre") {
            scoreU++;
            $('#scoreUtilisateur').text(scoreU);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez gagner ! :D");
        } else {
            scoreO++;
            $('#scoreOrdinateur').text(scoreO);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez perdu :( ");
        }
    } else if (choixUtilisateur === "ciseaux") {
        if (choixOrdi === "feuille") {
            scoreU++;
            $('#scoreUtilisateur').text(scoreU);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez gagner ! :D");
        } else {
            scoreO++;
            $('#scoreOrdinateur').text(scoreO);
            return $('.ordinateur img').attr('src', 'images/' + choixOrdi + '.png') + $('#resultat').text("Vous avez perdu :( ");
        }
    }


}