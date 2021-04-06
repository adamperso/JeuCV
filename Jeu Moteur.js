const monairedejeu = document.getElementById('airedejeu');
var tableaupokemon = ["", "", "", "", "", "", "", "", "", "", ""];
var pikachu = document.querySelector("#monjoueur");
var pikachu2 = document.getElementsByClassName("monjoueur");
var y = monairedejeu.style.height - 30;
var dx = 2;
var dy = -2;
niveaudejeu = 1;

function p() {
    y = parseInt(Math.random() * 100);
    return y;
};

random = function () {
    var num = Math.floor(Math.random() * 99) + 1;
    //num provient de stackoverflow : https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value?lq=1
    //et je l'ai remanié pour determiner des positions random positives et negatives;
    num *= Math.round(Math.random()) ? 1 : -1;
    var e = (num * -10) * 0.01;
    i = parseInt(e / 3) + 1;
    return i;
};

function creerennemi() {
    for (x = 0; x < 30; x++) {
        var ennemi = document.createElement('img');
        ennemi.src = "pokeball.png";
        // ennemi.backgroundColor = "blue";
        ennemi.className = "blah";
        ennemi.style.position = "absolute";
        // ennemi.style.border = "white 1px solid";        ennemi.style.width = "30px";
        ennemi.style.height = "30px";
        ennemi.setAttribute("data-dirx", random());
        ennemi.setAttribute("data-dirY", random());
        // ennemi.style.backgroundColor = "white";
        ennemi.id = x;
        ennemi.style.top = p() + "%";
        ennemi.style.left = p() + "%";
        monairedejeu.append(ennemi);
        // tableaupokeball[x].push(ennemi.id);
    };
};
var a = document.getElementsByClassName('blah');
var pika = document.getElementsByClassName('monjoueur');

function bougerennemis() {
    
    for (let i = 0; i < a.length; i++) {
        //Positionnement en Y
         t = a[i].style.top;
        // console.log(t);
         u = parseInt(t);
        // console.log(u);
        // console.log(a[i].dataset.diry);
         y = parseInt(a[i].dataset.diry);
         w = Math.sign(y);
        if (u + y >= 100 || u + y <= 0) {
            if (w == 1) {
                k = "-" + y;
                a[i].dataset.diry = k;
            } else if (w == -1) {
                k = Math.abs(y);
                a[i].dataset.diry = k;
            } else if (w == 0) {
                k = y++;
                a[i].dataset.diry = k;
            }
        }
        t = u + y;
        t2 = t;
        t = t * niveaudejeu;
        t = parseInt(t) + "%";
        // console.log(t);
        a[i].style.top = t;
        
        //Positionnement en X
         t = a[i].style.left;
        // console.log(t);
         u = parseInt(t);
        // console.log(u);
        // console.log(a[i].dataset.diry);
         y = parseInt(a[i].dataset.dirx);
         w = Math.sign(y);
        if (u + y >= 98 || u + y <= 0) {
            if (w == 1) {
                k = "-" + y;
                a[i].dataset.dirx = k;
            } else if (w == -1) {
                k = Math.abs(y);
                a[i].dataset.dirx = k;
            }
        }
        t = u + y;
        t = t * niveaudejeu;
        t = parseInt(t) + "%";
        // console.log(t);
        a[i].style.left = t;
    }
};
var boutonDeJeu = document.getElementById('boutonDeJeu');
var l = document.getElementsByClassName('blah');

creerennemi();
    setInterval(function () {
        bougerennemis()
    }, 500);


