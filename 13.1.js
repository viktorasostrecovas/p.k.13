window.onload = function() {
    let x = +prompt("Iveskite skaiciu");

    arSkaiciusYraLyginis(x);
}

function arSkaiciusYraLyginis(a) {

    if (a % 2 == 0) {
    alert("True");
    } else if (a % 2 == 1) {
    alert("False");
}
}